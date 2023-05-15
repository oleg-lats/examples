<?php

namespace App\Support\ApiResponse;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ApiResponse
{
    /**
     * @var Request
     */
    protected Request $request;

    /**
     * @var string
     */
    public const STATUS_SUCCESS = "success";

    /**
     * @var string
     */
    public const STATUS_ERROR = "error";

    /**
     * @var string
     */
    public const STATUS_VALIDATION = "validation";

    /**
     * @var string
     */
    public const STATUS_NOT_FOUND = "notFound";

    /**
     * @var string
     */
    public const STATUS_AUTH = "auth";

    /**
     * APIResponse constructor.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @param int|string $status
     * @return int|string
     */
    protected function getStatus(int|string $status): int|string
    {
        // 2** - OK
        // 422 - Validation
        // 404 - notFound
        // 403,401 - Authentication
        // Other - error

        if (
            in_array($status, [
                self::STATUS_SUCCESS,
                self::STATUS_ERROR,
                self::STATUS_NOT_FOUND,
                self::STATUS_VALIDATION,
                self::STATUS_AUTH,
            ], true)
        ) {
            return $status;
        }

        if ($status >= 200 && $status < 300) {
            return self::STATUS_SUCCESS;
        }

        if ($status === 404) {
            return self::STATUS_NOT_FOUND;
        }

        if ($status === 403 || $status === 401) {
            return self::STATUS_AUTH;
        }

        if ($status === 422) {
            return self::STATUS_VALIDATION;
        }

        return self::STATUS_ERROR;
    }

    /**
     * @param string $status
     * @param int $code
     *
     * @return int
     */
    protected function getCode(string $status, int $code = 200): int
    {
        if ($status === self::STATUS_SUCCESS) {
            return $code >= 200 && $code < 300 ? $code : 200;
        }

        if ($status === self::STATUS_NOT_FOUND) {
            return 404;
        }

        if ($status === self::STATUS_AUTH) {
            return 403;
        }

        if ($status === self::STATUS_VALIDATION) {
            return 422;
        }

        if ($status === self::STATUS_ERROR) {
            return $code !== 200 ? $code : 500;
        }

        return $code;
    }

    /**
     * @param mixed $data
     * @param string|null $message
     * @param int $code
     *
     * @return JsonResponse
     */
    public function success(array|object $data, string $message = null, int $code = 200): JsonResponse
    {
        return $this->response(self::STATUS_SUCCESS, $data, $message, $code);
    }

    /**
     * @param int|string $status
     * @param null|array $data
     * @param string|null $message
     * @param int $code
     *
     * @return JsonResponse
     */
    public function response(int|string $status, null|array|object $data = [], string $message = null, int $code = 200): JsonResponse
    {
        $status = $this->getStatus($status);

        $code = $this->getCode($status, $code);

        $response = [
            "status" => $status,
            "message" => empty($message) ? Response::$statusTexts[$code] : $message,
            "data" => $data,
        ];

//        if (is_countable($data) && !empty($data)) {
//            $response["count"] = count($data);
//        }

//        dd($response);

        return response()->json($response, $code);
    }

    /**
     * @param mixed $data
     * @param null|string $message
     *
     * @return JsonResponse
     */
    public function ok(mixed $data, string $message = null): JsonResponse
    {
        return $this->success($data, $message);
    }

    /**
     * @param string $message
     * @param null|array $data
     * @param int $code
     *
     * @return JsonResponse
     */
    public function error(string $message, null|array $data = [], int $code = 500): JsonResponse
    {
        return $this->response(self::STATUS_ERROR, $data, $message, $code);
    }

    /**
     * @param string $message
     * @param null|array $data
     * @param int $code
     *
     * @return JsonResponse
     */
    public function auth(string $message, null|array $data = [], int $code = 403): JsonResponse
    {
        return $this->response(self::STATUS_AUTH, $data, $message, $code);
    }

    /**
     * @param string $message
     * @param null|array $data
     * @param int $code
     *
     * @return JsonResponse
     */
    public function validation(string $message, null|array $data = [], int $code = 422): JsonResponse
    {
        return $this->response(self::STATUS_VALIDATION, $data, $message, $code);
    }

    /**
     * @param string $message
     * @param null|array $data
     * @param int $code
     *
     * @return JsonResponse
     */
    public function notFound(string $message, null|array $data = [], int $code = 404): JsonResponse
    {
        return $this->response(self::STATUS_NOT_FOUND, $data, $message, $code);
    }
}
