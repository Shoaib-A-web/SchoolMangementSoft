<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthenticationController extends Controller
{
    //
    public function authenticate(Request $request){
        //apply validation 

        $validator = Validator::make(
            $request->all(),
            [
                'email' => 'required|email',
                'password'=> 'required'
            ]
        );

        if ($validator->fails()){
            return response()->json([
                'status'=> false,
                'error'=> $validator->errors()
            ]);
        }else{
            $credentials = [
                'email'=> $request->email,
                'password'=> $request->password,
            ];
            // check database for user 
            if(Auth::attempt($credentials)){
                $user=User::find(Auth::user()->id);
                $name=Auth::user()->name;
                $email=Auth::user()->email;

                
                $token= $user->createToken('token')->plainTextToken;
                return response()->json([
                    'status'=>true,
                    'token'=> $token,
                    'id'=> Auth::user()->id,
                    'name'=>$name,
                    'email'=>$email
                ]);
                

            }else{
                return response()->json([
                    'status'=>false,
                    'message'=> 'Either email/password is incorrect.'
                ]);
            }
        }
    }

    public function logout( Request $request){
        if (!$request->user()){
             return response()->json([
                    'status' => false,
                    'message' => 'Unauthenticated'
                ], 401);
        }
        $request->user()->currentAccessToken()->delete();
        
        return response()->json([
            'state'=> true,
            'message'=>'Logout successfully.'
        ]);

    }
}
