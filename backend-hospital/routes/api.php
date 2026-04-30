<?php

use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

// Autenticação
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login');

// Route::middleware('auth:sanctum'){
//     Route::get();
// };