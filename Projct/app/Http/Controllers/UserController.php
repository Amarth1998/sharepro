<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function userregister(Request $req)
    {
        // Validate the incoming request
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:3', 
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create new user instance
        $user = new User;
        $user->name = $req->name;
        $user->email = $req->email;
        $user->password = Hash::make($req->password); // Hash the password
        $user->save();

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user->only(['id', 'name', 'email']),
        ], 201);
    }



    public function userlogin(Request $req)
    {
        // Validate the incoming request
        $validator = Validator::make($req->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
    
        // Check if validation fails
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
    
        // Find the user by email
        $user = User::where('email', $req->email)->first();
    
        // Check if user exists and password is correct
        if (!$user || !Hash::check($req->password, $user->password)) {
            return response()->json(['error' => 'User credentials are incorrect'], 401);
        }
    
       
        return response()->json([
            'message' => 'Login successful',
            // 'user' => $user->only(['id', 'name', 'email']),
        ]);
    }
}
