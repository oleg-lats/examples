<?php

namespace App\Support\Dto;

use DateTimeInterface;

class Context
{
    public const KEY_FORMAT_CAMEL = 1;
    public const KEY_FORMAT_SNAKE = 2;

    public const FORMAT_DATE = 0;
    public const FORMAT_BOOLEAN = 1;
    public const FORMAT_KEY = 2;
    const FORMAT_VALUE = 3;

    public const DATE_FORMAT_STANDARD = 1;
    public const DATE_FORMAT_TIMESTAMP = 2;
    public const BOOLEAN_FORMAT_INT = 3;
    public const BOOLEAN_FORMAT_BOOL = 4;

    private $config;
    private $default;
    private $class;

    /**
     * @param $config
     * @param $default
     */
    public function __construct($config, $default, $class)
    {
        $this->config = $config;
        $this->default = $default;
        $this->class = $class;
    }

    public function formatValue($key, $value)
    {
        $format = $this->resolveFormat($key, $value);

        if (is_null($format)) {
            return $value;
        }

        if (is_array($format)) {
            return $this->formatEnum($format, $value);
        }

        return $this->formatByConfig($format, $value);
    }

    private function formatBooleanInt($value)
    {
        return (int)$value;
    }

    /**
     * @param DateTimeInterface|null $value
     * @return string|null
     */
    private function formatDateStandard($value)
    {
        if (is_null($value)) {
            return null;
        }

        return $value->format(DATE_W3C);
    }

    /**
     * @param DateTimeInterface|null $value
     * @return string|null
     */
    private function formatDateTimestamp($value)
    {
        if (is_null($value)) {
            return 0;
        }

        return (int)$value->format('U');
    }

    private function formatEnum($value, $format)
    {
        return $format[$value];
    }

    public function formatKey($key)
    {
        $format = isset($this->config[$key][self::FORMAT_KEY])
            ? $this->config[$key][self::FORMAT_KEY]
            : $this->default[self::FORMAT_KEY];

        if ($format === self::KEY_FORMAT_SNAKE) {
            return Str::toSnake($key);
        }

        if ($format === self::KEY_FORMAT_CAMEL) {
            return Str::toCamel($key);
        }

        return $key;
    }

    private function formatBooleanBool($value)
    {
        return (bool)$value;
    }

    private function formatByConfig($format, $value)
    {
        switch ($format) {
            case self::DATE_FORMAT_STANDARD:
                return $this->formatDateStandard($value);
            case self::DATE_FORMAT_TIMESTAMP:
                return $this->formatDateTimestamp($value);
            case self::BOOLEAN_FORMAT_BOOL:
                return $this->formatBooleanBool($value);
            case self::BOOLEAN_FORMAT_INT:
                return $this->formatBooleanInt($value);
            default:
                return $value;
        }
    }

    private function getDefaultValueFormat($key, $value)
    {
        if (is_bool($value)) {
            return $this->default[self::FORMAT_BOOLEAN];
        }

        if ($value instanceof DateTimeInterface) {
            return $this->default[self::FORMAT_DATE];
        }

        if (is_null($value)) {
            $types = call_user_func([$this->class, 'properties'])[$key]['types'];
            if (in_array(DateTimeInterface::class, $types, true)) {
                return $this->default[self::FORMAT_DATE];
            }
        }

        return null;
    }

    private function resolveFormat($key, $value)
    {
        return isset($this->config[$key])
            ? $this->config[$key]
            : $this->getDefaultValueFormat($key, $value);
    }
}

