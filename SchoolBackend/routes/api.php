<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\ClassController;
use App\Http\Controllers\studentcontroller;
use App\Http\Controllers\TempStudentsController;
use App\Http\Controllers\Usercontroller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserTypeController;
use GuzzleHttp\Middleware;

Route::post('authenticate',[AuthenticationController::class,'authenticate']); // api main user or supper user table  for loging

Route::post('/userType/login',[UserTypeController::class,'login']);  // api for sub user or child user with userType table
Route::patch('/users/{id}', [UserTypeController::class, 'update']);  // api for update user-type table
Route::get('/users/{id}', [UserTypeController::class, 'show']);  // api for getting data of spacific id user-type table

Route::middleware('auth:sanctum')->post('logout', [AuthenticationController::class, 'logout']); //api for logout

Route::apiResource('user-types',UserTypeController::class);    // route for user_types table.
Route::middleware('auth:senctum')->group(function (){
    
    Route::post('tempStudent',[TempStudentsController::class, 'store']);   // api for insertin data 
    });
    Route::get('getTempStudent',[TempStudentsController::class,'index']);  //api for getting all data from tamp student
    Route::get('searchTempStudent/{id}',[TempStudentsController::class,'show']);  //api for getting all data from tamp student with id


    
    Route::resource('users', Usercontroller::class);

    
    Route::group(['middleware'=>['auth:sanctum']],function(){
        //potected route
        Route::get('dashboard',[DashboardController::class,'index']);
        // Route::get('logout',[AuthenticationController::class,'logout']);
});


Route::middleware('auth:sanctum')->group(function(){

    // Route::post('/contact', [ContactController::class, 'store']);
    // Route::get('/contact', [ContactController::class, 'index']);
    // Route::get('/contact/{id}', [ContactController::class, 'show']);
    // Route::put('/contact/{id}', [ContactController::class, 'update']);
    // Route::delete('/contact/{id}', [ContactController::class, 'destroy']);
            //or
    Route::apiResource('contact', ContactController::class);
    });
    Route::apiResource('class',ClassController::class);
    Route::get('/class/search', [ClassController::class, 'searchByName']);
