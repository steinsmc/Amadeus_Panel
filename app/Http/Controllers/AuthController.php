<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request,Response $response)
    {
        $credentials = $request->only('name','password');

        if(Auth::attempt($credentials)){
            return response()->json(['success' => true,'token' => auth()->user()->generateToken()],200);
        }else{
            return response()->json(['success' => false],401);
        }
    }

    public function register(Request $request)
    {
        $credentials = $request->only('name','password','email');

        $user = new User();
        $user->name = $credentials['name'];
        $user->email = $credentials['email'];
        $user->password = Hash::make($credentials['password']);
        $user->api_token = Str::random( 60);
        if($user->save()){
            return response()->json(['success' => true],200);
        }else{
            return response()->json(['success' => false],400);
        }
    }
}