<?php

use App\Http\Controllers\CombinedReportController;
use App\Http\Controllers\DietTypeController;
use App\Http\Controllers\GeneController;
use App\Http\Controllers\HealthReportController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::redirect('/', '/login');

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', static function () {
        return view('dashboard');
    })
        ->name('dashboard');

// USERS
    Route::get('/users', [UserController::class, 'index'])
        ->name('users.index');

    Route::get('/users/{id}', [UserController::class, 'view'])
        ->name('user.view');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
