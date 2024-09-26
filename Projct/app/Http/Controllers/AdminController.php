<?php

namespace App\Http\Controllers;
use App\Models\Admin;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function adminregister(Request $req)
    {
        // Validate the incoming request
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:admins',
            'password' => 'required|string|min:3', 
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        // Create new admin instance
        $admin = new Admin;
        $admin->name = $req->name;
        $admin->email = $req->email;
        $admin->password = Hash::make($req->password); // Hash the password
        $admin->save();

        return response()->json([
            'message' => 'Admin registered successfully',
            'user' => $admin->only(['id', 'name', 'email']),
        ], 201);
    }



    public function adminlogin(Request $req)
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
    
        // Find the admin by email
        $admin = Admin::where('email', $req->email)->first();
    
        // Check if user exists and password is correct
        if (!$admin || !Hash::check($req->password, $admin->password)) {
            return response()->json(['error' => 'User credentials are incorrect'], 401);
        }
    
       
        return response()->json([
            'message' => ' admin Login successful',
            'admin' => $admin->only(['id', 'name', 'email']),
        ]);
    }
}
