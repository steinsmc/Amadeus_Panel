<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::any('/',function (){
   return ["success" => true,"bugdhdj" => true,"version" => Amadeus_Panel_Version];
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/', 'AuthController@me');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
//    Route::post('register', 'AuthController@register');/*TEST!!*/
});

Route::group([
    'middleware' => 'auth',
    'prefix' => 'daemons'
], function ($router) {
    Route::any('/', 'DaemonController@getAll');
});