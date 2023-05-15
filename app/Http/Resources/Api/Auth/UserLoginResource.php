<?php

namespace App\Http\Resources\Api\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @OA\Schema(schema="User.GetTokenResource",
 *   description="Get User Token",
 *   @OA\Property(property="accessToken", type="string",
 *     description="Access Token",
 *     example="1|fhakldfhlajdflasdjfhlasdjhflsadjhflsajfdh"
 *   ),
 *   @OA\Property(property="tokenType", type="string",
 *     description="Token Type",
 *     example="Bearer",
 *   ),
 * )
 */


class UserLoginResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'accessToken' => $this->plainTextToken,
            'token_type' => 'Bearer'
            ];
    }
}
