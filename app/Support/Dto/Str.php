<?php

namespace App\Support\Dto;

final class Str
{
    private static $snakeCache = [];
    private static $camelCache = [];
    private static $studlyCache = [];

    public static function toSnake($value, $delimiter = '_')
    {
        $key = $value;

        if (isset(self::$snakeCache[$key][$delimiter])) {
            return self::$snakeCache[$key][$delimiter];
        }

        if (!ctype_lower($value)) {
            $value = preg_replace('/\s+/u', '', ucwords($value));

            $value = self::lower(preg_replace('/(.)(?=[A-Z])/u', '$1' . $delimiter, $value));
        }

        return self::$snakeCache[$key][$delimiter] = $value;
    }


    public static function toCamel($value)
    {
        if (isset(self::$camelCache[$value])) {
            return self::$camelCache[$value];
        }

        return self::$camelCache[$value] = lcfirst(self::toPascal($value));
    }

    public static function toKebab($input)
    {
        return self::toSnake($input, '-');
    }

    public static function lower($input)
    {
        return mb_strtolower($input, 'UTF-8');
    }

    public static function toPascal($input)
    {
        if (isset(self::$studlyCache[$input])) {
            return self::$studlyCache[$input];
        }

        return self::$studlyCache[$input] = str_replace(' ', '', ucwords(str_replace(['-', '_'], ' ', $input)));
    }
}
