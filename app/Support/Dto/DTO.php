<?php

namespace App\Support\Dto;

use App\Exceptions\InvalidPropertyValueException;
use App\Exceptions\MissingDockBlockException;
use App\Exceptions\UnknownProperty;
use App\Support\AliasResolver;
use DateTimeImmutable;
use DateTimeInterface;
use Exception;

use Generator;
use JsonException;
use JsonSerializable;
use ReflectionClass;
use ReflectionException;
use SplFileInfo;
use Traversable;

abstract class DTO implements JsonSerializable
{
    public const SERIALIZER_STANDARD = StandardSerializer::class;

    public const PROPERTY_READ = 1;
    public const PROPERTY_WRITE = 2;

    public const TYPE_GENERIC_SUFFIX = '[]';

    public const TYPE_AND_OPERATOR = '&';
    public const TYPE_OR_OPERATOR = '|';

    /** @var array */
    protected static array $__properties = [];

    private array $data = [];

    /**
     * @throws ReflectionException
     */
    public function __construct(array $data = [])
    {
        $this->hydrate($data);
    }

    /**
     * Checking property in doc block
     *
     * @param $name
     * @return bool
     * @throws ReflectionException
     */
    final protected function propertyExists($name): bool
    {
        return array_key_exists($name, static::properties());
    }

    /**
     * Is property Written-able.
     *
     * @param $name
     * @return bool
     * @throws ReflectionException
     */
    private function isWriteableProperty($name): bool
    {
        return $this->propertyExists($name)
            && static::properties()[$name]['mode'] & self::PROPERTY_WRITE;
    }

    /**
     * @param $mode
     * @param $type
     * @return array
     * @throws ReflectionException
     */
    protected static function preparePropertyData($mode, $type): array
    {
        return [
            'mode' => self::resolveMode($mode),
            'types' => array_map(static function ($type) {
                return implode(self::TYPE_AND_OPERATOR, array_map(static function ($type) {
                    $suffix = '';

                    if (strpos($type, self::TYPE_GENERIC_SUFFIX)) {
                        $suffix = self::TYPE_GENERIC_SUFFIX;
                        $type = str_replace(self::TYPE_GENERIC_SUFFIX, '', $type);
                    }

                    return self::makeAliasResolver()->getRealType($type) . $suffix;
                }, explode(self::TYPE_AND_OPERATOR, $type)));
            }, explode(self::TYPE_OR_OPERATOR, $type)),
        ];
    }

    /**
     * @return AliasResolver|mixed
     * @throws ReflectionException
     */
    protected static function makeAliasResolver(): mixed
    {
        return AliasResolver::make(static::class);
    }

    /**
     * Parse doc block with regular expressions
     * @return array
     * @throws ReflectionException
     */
    final public static function properties(): array
    {
        if (self::class === static::class) {
            return [];
        }

        if (!isset(self::$__properties[static::class])) {
            $pattern = '/@property(-(?<mode>(read|write)))?\s+((?<type>[\[\]\w\|&\\\\]+)\s+)?\$(?<variable>(\w+))\r?\n/m';

            $docblock = static::docblock();
            preg_match_all($pattern, $docblock ?: '', $matches);

            $properties = array_combine($matches['variable'], array_map(static function ($mode, $type) {
                return self::preparePropertyData($mode, $type);
            }, $matches['mode'], $matches['type']));

            if ($parent = get_parent_class(static::class)) {
                $properties = array_merge($parent::properties(), $properties);
            }

            self::$__properties[static::class] = $properties;
        }

        return self::$__properties[static::class];
    }

    /**
     * Is property Read-able.
     *
     * @param $name
     * @return bool
     * @throws ReflectionException
     */
    private function isReadableProperty($name): bool
    {
        return $this->propertyExists($name)
            && (static::properties()[$name]['mode'] & self::PROPERTY_READ);
    }

    /**
     * @throws ReflectionException
     */
    final public static function readableProperties(): array
    {
        return array_filter(static::properties(), static function ($property) {
            return $property['mode'] & self::PROPERTY_READ;
        });
    }

    /**
     * Read property value
     *
     * @param $name
     * @return mixed|null
     */
    private function readProperty($name): mixed
    {
        return $this->data[$name] ?? null;
    }

    /**
     * Save property value
     *
     * @param $name
     * @param $value
     * @param bool $force
     * @return void
     * @throws ReflectionException
     */
    private function writeProperty($name, $value, bool $force = false): void
    {
        if (!$this->propertyExists($name)) {
            throw new UnknownProperty($name, get_class($this));
        }

        if (!$force && !$this->isWriteableProperty($name)) {
            throw new UnknownProperty($name, get_class($this));
        }

        $this->data[$name] = $this->preparePropertyValue($name, $value);
    }

    /**
     * @return false|string
     * @throws MissingDockBlockException
     */
    private static function docblock(): bool|string
    {
        if ($dockBlock = (new ReflectionClass(static::class))->getDocComment()) {
            return $dockBlock;
        }

        return false;
    }

    /**
     * @param string $name
     * @param mixed $value
     * @return mixed
     * @throws ReflectionException
     * @throws Exception
     */
    private function preparePropertyValue(string $name, mixed $value): mixed
    {
        $types = static::properties()[$name]['types'];

        $allSingleTypes = array_map(static function ($type) {
            return str_replace(self::TYPE_GENERIC_SUFFIX, '', $type);
        }, $types);

        foreach ($types as $type) {

            $value = $this->autoCast($type, $value, $name, $allSingleTypes);

            if ($this->checkType($type, $value)) {
                return $value;
            }
        }

        throw new InvalidPropertyValueException(sprintf(
            'Property [%s] in class [%s] should be of type [%s], [%s] given',
            $name, static::class, implode('|', $types), gettype($value)
        ));
    }

    /**
     * @param string $name
     * @return mixed|null
     * @throws ReflectionException
     */
    final public function __get(string $name)
    {
        if (!$this->isReadableProperty($name)) {
            throw new UnknownProperty($name, get_class($this));
        }

        return $this->readProperty($name);
    }

    /**
     * @param string $name
     * @param mixed $value
     * @throws ReflectionException
     */
    final public function __set(string $name, mixed $value)
    {
        $this->writeProperty($name, $value);
    }

    final public function __isset($name)
    {
        return isset($this->data[$name]);
    }

    /**
     * @param array $data
     * @param callable|null $onError
     * @throws ReflectionException
     */
    final public function hydrate(array $data, callable $onError = null): void
    {
        foreach ($this->prepareCamelCase($data) as $property => $value) {
            try {
                $this->writeProperty($property, $value, true);

            } catch (InvalidPropertyValueException $e) {

                if (!$onError) {

                    throw $e;
                }

                $onError($property, $e->getMessage());
            }
        }
    }

    /**
     * @throws ReflectionException
     */
    final public function validate($onError): void
    {
        foreach ($this->unfilledProperties() as $property) {
            if (static::isRequiredProperty($property)) {
                $onError($property, 'Property required.');
            }
        }
    }

    /**
     * @throws ReflectionException
     */
    final public static function isRequiredProperty($property): bool
    {
        return !in_array('null', static::properties()[$property]['types'], true);
    }


    /**
     * @throws ReflectionException
     */
    final protected function unfilledProperties(): array
    {
        return array_diff(array_keys($this->data), array_keys(static::properties()));
    }

    final public function data(): array
    {
        return $this->data;
    }

    private function checkType($type, $value): bool
    {
        // Checking merged types.
        // For example `array&string[]`.
        // So, `$value` should be of type `array` AND each element should be `string`.
        // In opposite of operator `|` (`array|string[]`) when any type check is enough (logical OR).
        if ($this->isMergedType($type)) {
            foreach (explode(self::TYPE_AND_OPERATOR, $type) as $subType) {
                if (!$this->checkType($subType, $value)) {
                    return false;
                }
            }
            return true;
        }

        if ($this->isListType($type)) {
            if (is_array($value) || $value instanceof Traversable) {
                $ofType = str_replace(self::TYPE_GENERIC_SUFFIX, '', $type);
                foreach ($value as $ofValue) {
                    if (!$this->checkType($ofType, $ofValue)) {
                        return false;
                    }
                }

                return true;
            }

            return false;
        }

        return match ($type) {
            'array' => is_array($value),
            'bool' => is_bool($value),
            'callable' => is_callable($value),
            'float' => is_float($value),
            'int' => is_int($value),
            'null' => is_null($value),
            'object' => is_object($value),
            'resource' => is_resource($value),
            'string' => is_string($value),
            'mixed', '' => true,
            default => $value instanceof $type,
        };
    }

    private function isListType($type): bool
    {
        return str_contains($type, self::TYPE_GENERIC_SUFFIX);
    }

    private function isMergedType($type): bool
    {
        return str_contains($type, self::TYPE_AND_OPERATOR);
    }

    /**
     * @param string $serializer
     * @return array
     */
    public function jsonSerialize(string $serializer = self::SERIALIZER_STANDARD): array
    {
        return iterator_to_array($serializer::create()->serialize($this));
    }

    public function toArray()
    {
        return $this->jsonSerialize();
    }

    private function prepareCamelCase(array $data): Generator
    {
        foreach ($data as $key => $value) {
            yield Str::toCamel($key) => $value;
        }
    }

    private static function resolveMode($mode): int
    {
        return match ($mode) {
            'read' => self::PROPERTY_READ,
            'write' => self::PROPERTY_WRITE,
            default => self::PROPERTY_READ | self::PROPERTY_WRITE,
        };
    }

    /**
     * @throws Exception
     */
    public function autoCast($type, $value, $name, $allPossibleTypes)
    {
        if (is_object($value) && method_exists($value, 'resolve')) {
            $value = $value->resolve();
        }

        if (is_null($value)) {
            return null;
        }

        switch ($type) {
            case 'int':
                return is_numeric($value) ? (int)$value : $value;
            case 'float':
                return is_numeric($value) ? (float)$value : $value;
            case 'string':
                return (string)$value;
            case 'bool':
                return (bool)$value;
            case 'resource':
                foreach ($allPossibleTypes as $oneType) {
                    if ($value instanceof $oneType) {
                        return $value;
                    }
                }

                return ($value instanceof SplFileInfo) ? fopen($value->getRealPath(), 'rb') : $value;
            default:
                if (is_string($value) && $type === DateTimeInterface::class) {
                    $value = new DateTimeImmutable($value);
                }

                if (is_array($value) && is_subclass_of($type, __CLASS__)) {
                    $value = new $type($value);
                }

                if ($this->isListType($type)) {
                    $value = iterator_to_array($this->autoCastList($type, $value, $name, $allPossibleTypes));
                }

                return $value;
        }
    }

    /**
     * @throws Exception
     */
    public function autoCastList($type, $list, $name, $allPossibleTypes): Generator
    {
        $type = str_replace(self::TYPE_GENERIC_SUFFIX, '', $type);

        foreach ($list as $value) {
            yield $this->autoCast($type, $value, $name, $allPossibleTypes);
        }
    }

    /**
     * @throws JsonException
     */
    public function hash(): string
    {
        $data = $this->ksortRecursive($this->jsonSerialize());

        return md5(static::class . json_encode($data, JSON_THROW_ON_ERROR));
    }

    private function ksortRecursive($data)
    {
        if (is_array($data)) {
            ksort($data);
            foreach ($data as $index => $nested) {
                $data[$index] = $this->ksortRecursive($nested);
            }
        }

        return $data;
    }
}

