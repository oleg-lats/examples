<?php

namespace App\Http\Resources\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(schema="User.GetInfo",
 *   description="User Reports list",
 *   @OA\Property(property="id", type="integer",
 *     description="ID of brand",
 *     example=12345,
 *   ),
 *   @OA\Property(property="firstName", type="string",
 *     description="User Name",
 *     example="Joe",
 *   ),
 *   @OA\Property(property="lastName", type="string",
 *     description="Last Name",
 *     example="Pedestrian",
 *   ),
 *   @OA\Property(property="fullName", type="integer",
 *     description="User Full Name",
 *     example="Joe Pedestrian",
 *   ),
 *   @OA\Property(property="phone", type="string",
 *     description="User Phone",
 *     example="11231234567",
 *   ),
 *   @OA\Property(property="email", type="string",
 *     description="User Email",
 *     example="test@email.com",
 *   ),
 * )
 */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id" => $this->id,
            "firstName" => trim($this->first_name),
            "lastName" => trim($this->last_name),
            "fullName" => trim($this->fullname),
            "phone" => trim($this->phone),
            "email" => $this->email,
        ];
    }
}
