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
    if(auth()->check()) {
        return redirect("/dashboard");
    }else{
        return redirect("/login");
    }
});


Route::get('/login',function (){
    return view("login");
});
