<?php

namespace App\Http\Resources\Api\Submitted;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
/**
 * @OA\Schema(schema="GetSubmittedListResource.SubmittedResource",
 *   description="Submitted list",
 *   @OA\Property(property="id", type="integer",
 *     description="ID of File",
 *     example=12345,
 *   ),
 *   @OA\Property(property="name", type="string",
 *     description="Name of File",
 *     example="sitename",
 *   ),
 *   @OA\Property(property="tmpName", type="string",
 *     description="Name of File",
 *     example="tmpName",
 *   ),
 *   @OA\Property(property="slug", type="string",
 *     description="Slug of File",
 *     example="slug-name",
 *   ),
 *   @OA\Property(property="size", type="integer",
 *     description="Size of File",
 *     example=12345,
 *   ),
 *   @OA\Property(property="status", type="bool",
 *     description="Status of File",
 *     example=true,
 *   ),
 * )
 */

class SubmittedItemResource extends JsonResource
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
            'name' => $this->name,
            'tmpName' => $this->tmp_name,
            'slug' => $this->slug,
            'size' => $this->size,
            'status' => $this->status
        ];
    }
}
