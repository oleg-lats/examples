<?php

namespace App\Support\Dto;

use DateTimeInterface;
use Generator;
use Illuminate\Support\Collection;
use JsonSerializable;

abstract class Serializer
{
    private static $instance;
    protected $contextMap = [];

    protected $default = [];

    /** @return static */
    public static function create(): static
    {
        if (!static::$instance) {
            static::$instance = new static();
        }

        return static::$instance;
    }

    /**
     * @param DTO $dto
     * @return Generator|void
     */
    public function serialize(DTO $dto)
    {
        if ($dto instanceof Collection) {
            foreach ($this->serializeList($dto) as $key => $element) {
                yield $key => $element;
            }
            return;
        }

        foreach ($this->generate($dto) as $key => $element) {
            yield $key => $element;
        }
    }

    private function serializeValue($value, $key = null, Context $context = null)
    {
        if (is_object($value) && !($value instanceof DateTimeInterface)) {
            if ($value instanceof DTO) {
                return iterator_to_array($this->serialize($value));
            }

            if ($value instanceof JsonSerializable) {
                return $value->jsonSerialize();
            }

            if (method_exists($value, 'toArray')) {
                return $value->toArray();
            }
        }

        if (is_array($value)) {
            return iterator_to_array($this->serializeList($value));
        }

        if ($context) {
            return $context->formatValue($key, $value);
        }

        return $value;
    }

    protected function serializeList($list)
    {
        foreach ($list as $key => $element) {
            yield $key => $this->serializeValue($element);
        }
    }

    private function getContext($dto)
    {
        $map = isset($this->contextMap[get_class($dto)]) ? $this->contextMap[get_class($dto)] : [];

        return new Context($map, $this->default, get_class($dto));
    }

    private function generate(DTO $dto)
    {
        $context = $this->getContext($dto);

        foreach (array_keys($dto::readableProperties()) as $key) {
            if (array_key_exists($key, $dto->data())) {
                yield $context->formatKey($key) => $this->serializeValue($dto->{$key}, $key, $context);
            }
        }
    }
}

