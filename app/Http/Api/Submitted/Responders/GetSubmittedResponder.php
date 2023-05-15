<?php

namespace App\Http\Api\Submitted\Responders;

use Illuminate\Http\JsonResponse;

/**
 * @OA\Schema(schema="GetDatatablesSubmittedResource", type="object",
 *   description="Datatables Submitted List",
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
 *     description="Submitted Items",
 *     @OA\Items(ref="#components/schemas/GetSubmittedListResource.SubmittedResource")
 *   ),
 * )
 */

class GetSubmittedResponder
{
    public function respond(array|object $data): JsonResponse
    {
        return api()->success($data);
    }
}
