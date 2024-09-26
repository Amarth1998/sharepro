<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


Route::post('userregister', [UserController::class, 'userregister']);
Route::post('userlogin', [UserController::class, 'userlogin']);

Route::post('adminregister', [AdminController::class, 'adminregister']);
Route::post('adminlogin', [AdminController::class, 'adminlogin']);