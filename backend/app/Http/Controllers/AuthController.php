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
    public function __construct()
    {
//        $this->middleware('auth:api', ['except' => ['login','register']]);
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function login()
    {
        $credentials = request(['name', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['success' => false,'error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function register()
    {
        $credentials = request(['name', 'password','email']);

        $user = new User();
        $user->name = $credentials['name'];
        $user->password = Hash::make($credentials['password']);
        $user->email = $credentials['email'];

        $user->save();
        return ["success" => true];
    }

    public function me()
    {
        $user = auth()->user();
        $user->avatar = "https://www.gravatar.com/avatar/" . md5( strtolower( trim( $user->avatar ) ) );
        return response()->json([
            "success" => true,
            "data" => $user
        ]);
    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'success' => true,
            'data' => [
                'access_token' => $token,
                'token_type' => 'bearer',
                'expires_in' => auth()->factory()->getTTL() * 60
            ]
        ]);
    }
}