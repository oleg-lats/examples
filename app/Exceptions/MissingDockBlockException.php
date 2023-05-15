<?php

namespace App\Exceptions;

class MissingDockBlockException extends \RuntimeException
{
    public function __construct($class)
    {
        parent::__construct(printf(
            'Missing dock-block for class [%s]',
            $class
        ));
    }
}
