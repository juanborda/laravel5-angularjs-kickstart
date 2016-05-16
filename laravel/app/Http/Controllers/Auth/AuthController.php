<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Dingo\Api\Http\Request;
use Tymon\JWTAuth\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Validation\Validator;

class AuthController extends Controller
{

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => 'required|email|max:255',
            'password' => 'sometimes|min:6',
        ]);
    }


    public function login (Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');
        $validator = $this->validator(['email' => $email, 'password' => $password]);
        if ($validator->fails()) {
            return response()->error($validator->messages(), 401);
        }


        try {

        } catch (JWTException $e) {
            return response()->error('Could not create a token', $e->getStatusCode());
        }

        return response()->error("The credentials are wrong", 400);
    }
}
