<?php

namespace App\Exceptions;

class UnknownProperty extends \InvalidArgumentException
{
    public function __construct($property, $class)
    {
        parent::__construct(sprintf(
            'Property [$%s] is not defined on DTO [%s]',
            $property, $class
        ));
    }
}
