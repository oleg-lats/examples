<?php

declare(strict_types=1);

namespace App\Support\ApiResponse;

use Illuminate\Support\Facades\Facade;

/**
 * Class API
 * @package App\Support\APIResponse
 */
class API extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return "api.response";
    }
}
