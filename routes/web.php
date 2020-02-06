<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view("single");
})->middleware("auth");

Route::get('/login',function (){
    if(auth()->check()) {
        return redirect("/dashboard");
    }
    return view("login");

})->name('login');
Route::post('/login',"AuthController@login");
Route::any('/logout',"AuthController@logout");
Route::any('/user',"AuthController@getUser");
Route::any('/register',"AuthController@register");

Route::any('/daemons','DaemonController@all');