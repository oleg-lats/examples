<?php

namespace App\Support;
use ReflectionClass;
use ReflectionException;

final class AliasResolver
{
    const STATEMENT_TERMINAL = ';';

    const KEY_USE = 'use';
    const KEY_ALIAS = 'alias';

    const BUILTIN = [
        'array',
        'bool', 'boolean',
        'callable',
        'float', 'double',
        'int', 'integer',
        'null',
        'object',
        'resource',
        'string',
        'mixed',
        ''
    ];

    const BUILTIN_ALIASES = [
        'integer' => 'int',
        'boolean' => 'bool',
        'double' => 'float',
    ];

    private static $resolversCache = [];

    /**
     * @var ReflectionClass
     */
    private $reflection;

    /**
     * @param ReflectionClass $reflection
     */
    public function __construct(ReflectionClass $reflection)
    {
        $this->reflection = $reflection;
    }

    /** @var array|null */
    private $useStatements;

    /**
     * Parse class file and get use statements from current namespace.
     *
     * @return array
     */
    private function parseUseStatements()
    {
        $source = $this->readFileSource();

        return $this->tokenizeSource($source);
    }


    /**
     * Read file source up to the line where our class is defined.
     *
     * @return string
     */
    private function readFileSource()
    {
        $file = fopen($this->reflection->getFileName(), 'rb');
        $line = 0;
        $source = '';

        while (!feof($file)) {
            ++$line;

            if ($line >= $this->reflection->getStartLine()) {
                break;
            }

            $source .= fgets($file);
        }

        fclose($file);

        return $source;
    }


    /**
     * Parse use-statements.
     *
     * @param string $source
     * @return array
     */
    private function tokenizeSource($source)
    {

        $tokens = token_get_all($source);

        $builtNamespace = '';
        $buildingNamespace = false;
        $matchedNamespace = false;

        $useStatements = [];
        $record = false;
        $currentUse = [
            self::KEY_USE => '',
            self::KEY_ALIAS => ''
        ];

        foreach ($tokens as $token) {

            if ($token[0] === T_NAMESPACE) {
                $buildingNamespace = true;

                if ($matchedNamespace) {
                    break;
                }
            }

            if ($buildingNamespace) {

                if ($token === self::STATEMENT_TERMINAL) {
                    $buildingNamespace = false;
                    continue;
                }

                switch ($token[0]) {

                    case T_STRING:
                    case T_NS_SEPARATOR:
                        $builtNamespace .= $token[1];
                        break;
                }

                continue;
            }

            if ($token === self::STATEMENT_TERMINAL || !is_array($token)) {

                if ($record) {
                    $useStatements[] = $currentUse;
                    $record = false;
                    $currentUse = [
                        self::KEY_USE => '',
                        self::KEY_ALIAS => ''
                    ];
                }

                continue;
            }

            if ($token[0] === T_CLASS) {
                break;
            }

            if (strcasecmp($builtNamespace, $this->reflection->getNamespaceName()) === 0) {
                $matchedNamespace = true;
            }

            if ($matchedNamespace) {

                if ($token[0] === T_USE) {
                    $record = self::KEY_USE;
                }

                if ($token[0] === T_AS) {
                    $record = self::KEY_ALIAS;
                }

                if ($record) {
                    switch ($token[0]) {
                        case T_STRING:
                        case T_NS_SEPARATOR:
                            $currentUse[$record] .= $token[1];
                            break;
                    }
                }
            }

            if ($token[2] >= $this->reflection->getStartLine()) {
                break;
            }
        }

        foreach ($useStatements as &$useStatement) {

            $useStatement[self::KEY_ALIAS] = empty($useStatement[self::KEY_ALIAS])
                ? array_reverse(explode('\\', $useStatement[self::KEY_USE]))[0]
                : $useStatement[self::KEY_ALIAS];
        }

        return $useStatements;
    }


    /**
     * Return array of use-statements
     *
     * @return array
     */
    private function getUseStatements()
    {
        if (!$this->useStatements) {

            $this->useStatements = $this->parseUseStatements();
        }

        return $this->useStatements;
    }

    /**
     * Return real type name for given alias.
     *
     * @param string $alias
     * @return string
     */
    public function getRealType($alias)
    {
        if (strpos($alias, '\\') === 0) {
            return ltrim($alias, '\\');
        }

        if ($this->isBuiltinType($alias)) {
            return $this->resolveBuiltinAlias($alias);
        }

        $path = explode('\\', $alias);
        $root = array_shift($path);

        $aliases = array_column($this->getUseStatements(), self::KEY_ALIAS);

        $index = array_search($root, $aliases, true);

        if ($index !== false) {
            $realPaths = array_column($this->getUseStatements(), self::KEY_USE);
            array_unshift($path, $realPaths[$index]);
        } else {
            array_unshift($path, $root);
            array_unshift($path, $this->reflection->getNamespaceName());
        }

        return implode('\\', $path);
    }

    /**
     * Check if given type is builtin.
     *
     * @param $alias
     * @return bool
     */
    public function isBuiltinType($alias)
    {
        return in_array(str_replace('[]', '', $alias), self::BUILTIN, true);
    }

    /**
     * Return canonical type name for builtin types if possible.
     *
     * @param string $alias
     * @return string
     */
    private function resolveBuiltinAlias($alias)
    {
        return array_key_exists($alias, self::BUILTIN_ALIASES)
            ? self::BUILTIN_ALIASES[$alias]
            : $alias;
    }

    /**
     * Build new or get existing AliasResolver for given class.
     *
     * @param string $className
     * @return AliasResolver|mixed
     * @throws ReflectionException
     */
    public static function make($className)
    {
        if (!isset(self::$resolversCache[$className])) {
            self::$resolversCache[$className] = new self(new ReflectionClass($className));
        }

        return self::$resolversCache[$className];
    }
}

