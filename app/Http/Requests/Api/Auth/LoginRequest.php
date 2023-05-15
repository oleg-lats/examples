<?php

namespace App\Http\Requests\Api\Auth;

use Illuminate\Foundation\Http\FormRequest;

/**
 * @OA\Schema(schema="User.LoginRequest",
 *     type="object",
 *     required={"email", "password", "remember_me"},
 *      @OA\Property(
 *      property="email",
 *      description="User Email",
 *      type="email",
 *      example="admin@test.local"
 *     ),
 *     @OA\Property(
 *      property="password",
 *      description="User Password",
 *      type="string",
 *      example="admin@test.local"
 *     ),
 *      @OA\Property(
 *      property="remember_me",
 *      description="Remember Me",
 *      type="bool",
 *      example=true
 *     ),
 * )
 *
 */

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ];
    }
}
