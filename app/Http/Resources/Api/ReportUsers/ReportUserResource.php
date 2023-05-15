<?php

namespace App\Http\Resources\Api\ReportUsers;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(schema="GetUserReporstResource.ReportResource",
 *   description="User Reports list",
 *   @OA\Property(property="id", type="integer",
 *     description="ID of brand",
 *     example=12345,
 *   ),
 *   @OA\Property(property="report_name", type="string",
 *     description="Report name",
 *     example="Hstamine",
 *   ),
 *   @OA\Property(property="score_total", type="integer",
 *     description="Score Total",
 *     example="43",
 *   ),
 *   @OA\Property(property="percentage_total", type="integer",
 *     description="Percentage Total",
 *     example=100,
 *   ),
 *   @OA\Property(property="user_score_total", type="integer",
 *     description="User Score Total",
 *     example="43",
 *   ),
 *   @OA\Property(property="user_percentage_total", type="float",
 *     description="User Percentage Total",
 *     example=35.7,
 *   ),
 *   @OA\Property(property="created_at", type="string",
 *     description="Created at",
 *     example="May 09, 2023 21:33",
 *   ),
 * )
 */

class ReportUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'report_name' => $this->report_name,
            'score_total' => $this->score_total,
            'percentage_total' => $this->percentage_total,
            'user_percentage_total' => number_format($this->user_percentage_total, 2),
            'created_at' => $this->created_at->format('M d, Y H:i')
        ];
    }
}
