<?php

use App\Support\ApiResponse\ApiResponse;
use Illuminate\Http\JsonResponse;

if (!function_exists("api")) {
    function api(string $status = "success", null|array $data = [], string $message = null, int $code = 200): ApiResponse|JsonResponse
    {
        if (func_num_args() === 0) {
            return app("api.response");
        }

        return app("api.response")->response($status, $data, $message, $code);
    }
}
