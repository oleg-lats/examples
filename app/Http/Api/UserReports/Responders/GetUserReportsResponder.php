<?php

namespace App\Http\Api\UserReports\Responders;

use Illuminate\Http\JsonResponse;

/**
 * @OA\Schema(schema="GetUserReportResource", type="object",
 *   description="User Report Resource",
 *   @OA\Property(property="status", type="string",
 *     description="Status of request",
 *     example="success",
 *   ),
 *   @OA\Property(property="message", type="string",
 *     description="Message",
 *     example="OK",
 *   ),
 *   @OA\Property(property="total", type="integer",
 *     description="Total count of table",
 *     example=12345,
 *   ),
 *   @OA\Property(property="data", type="array",
 *     description="User Report Items",
 *     @OA\Items(ref="#components/schemas/GetUserReporstResource.ReportResource")
 *   ),
 * )
 */

class GetUserReportsResponder
{
    public function respond(array|object $data): JsonResponse
    {
        return api()->success($data);
    }
}
