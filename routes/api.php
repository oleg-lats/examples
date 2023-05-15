<?php

use App\Http\Api\Submitted\Actions\GetSubmittedAction;
use App\Http\Api\UserReports\Actions\GetUserReportsActionController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\SubmitUserFileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::group(['prefix' => 'auth'], static function () {
    Route::post('login', [AuthController::class, 'login']);

    Route::group(['middleware' => 'auth:sanctum'], static function () {
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('user', [AuthController::class, 'user']);
    });
});

Route::group(['prefix' => 'submitted', 'middleware' => 'auth:sanctum'],
    static function () {
        Route::post('upload', [SubmitUserFileController::class, 'upload']);

        Route::get('/', GetSubmittedAction::class)
            ->name('submitted.index');

        Route::get('user-reports', GetUserReportsActionController::class)
            ->name('user-reports.list');

    });

Route::middleware('auth:sanctum')->get('/user',
    function (Request $request) {
        return $request->user();
    });
