<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\Auth\LoginRequest;
use App\Http\Resources\Api\Auth\UserLoginResource;
use App\Http\Resources\Api\Auth\UserResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Login user and create token
     *
     * @param LoginRequest $request
     * @return JsonResponse
     *
     * @OA\POST (
     *   summary="Login user",
     *   description="Get user token",
     *   path="/auth/login",
     *   tags={"Auth"},
     *   @OA\RequestBody(
     *   required=true,
     *       @OA\JsonContent(ref="#/components/schemas/User.LoginRequest")
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="OK",
     *     @OA\JsonContent(
     *     ref="#/components/schemas/User.GetTokenResource"
     *  )
     * )
     *  ),
     */

    public function login(LoginRequest $request): JsonResponse
    {
        $credentials = request(['email','password']);
        if(!Auth::attempt($credentials))
        {
            return response()->json([
                'message' => 'Unauthorized'
            ],401);
        }

        $user = $request->user();

        $tokenResult = $user->createToken('Personal Access Token');

        return response()->json(
            new UserLoginResource($tokenResult));
    }

    /**
     * Get the authenticated User
     *
     * @param Request $request
     * @return JsonResponse [json] user object
     *
     * @OA\GET (
     *   summary="User Info",
     *   description="Get user info",
     *   path="/auth/user",
     *   tags={"Auth"},
     *   security={ {"bearer_token": {} }},
     *   @OA\Response(
     *     response=200,
     *     description="OK",
     *     @OA\JsonContent(
     *     ref="#/components/schemas/User.GetInfo"
     *  )
     * )
     *  ),
     */
    public function user(Request $request): JsonResponse
    {
        return response()->json(new UserResource($request->user()));
    }

    /**
     * Logout user (Revoke the token)
     *
     * @param Request $request
     * @return JsonResponse [string] message
     */
    public function logout(Request $request): JsonResponse
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ]);

    }
}
