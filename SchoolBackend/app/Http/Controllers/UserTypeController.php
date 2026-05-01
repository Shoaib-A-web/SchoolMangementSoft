<?php
// this controller is used for curd opration for the user type table 
 
namespace App\Http\Controllers;

use App\Models\UserType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;



class UserTypeController extends Controller
{
    // conrolle for user counts
    public function totalUsers(Request $request){
        $count = count(UserType::all());

        if(!$count){
            return response()->json([
                'status' => false,
                'message' => 'User cannot found'
            ]);
        }else{
            return response()->json([
                'status' => true,
                'message' => 'User count fetched successfully',
                'data' => $count
            ]);
        }
        
    }
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $users= UserType::all();

        return response()->json([
            'status' => true,
            'message' => 'Data fetched successfull',
            'data' => $users
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    
    public function store(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:user_types,email',
            'gender' => 'required',
            'userType' => 'required',
            'contact' => 'required|digits:10',
            'aadhar' => 'required|digits:12',
            'age' => 'required|date',
            'image' => 'nullable|image|mimes:jpg,png,jpeg|max:2048',
            'password' => 'required|min:6'
        ]);

        // If validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        $data = $request->all();

        // Password Hash
        $data['password'] = Hash::make($request->password);

        // Image Upload
        if ($request->hasFile('image')) {
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('uploads'), $imageName);
            $data['image'] = $imageName;
        }

        // Insert data
        $user = UserType::create($data);

        return response()->json([
            'status' => true,
            'message' => 'User created successfully',
            'data' => $user
        ], 201);
    }

     /**
     * Display the specified resource.
     */

    public function show($id, Request $request)
    {
        //
        
        
        try {
            $user = UserType::find($id);

            if (!$user) {
                return response()->json([
                    'message' => 'User not found'
                ], 404);
            }

            return response()->json($user, 200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        //

        // 1. Find user
        $user = UserType::find($id);

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User not found'
            ], 404);
        }

        // 2. Validate incoming data
        $validator = Validator::make($request->all(), [
            'first_name' => 'sometimes|string|max:255',
            'last_name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email|unique:user_types,email,' . $id . ',user_id',
            'gender' => 'sometimes|string',
            'userType' => 'sometimes|string',
            'contact' => 'sometimes|digits:10',
            'aadhar' => 'sometimes|digits:12',
            'age' => 'sometimes|date',
            'image' => 'sometimes|image|mimes:jpg,jpeg,png|max:2048',
            'password' => 'sometimes|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        // 3. Get validated data
        $data = $validator->validated();

        // 4. Hash password only if provided
        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }

        // 5. Handle image upload
        if ($request->hasFile('image')) {

            //  delete old image
            if ($user->image && file_exists(public_path('storage/'.$user->image))) {
                unlink(public_path('storage/'.$user->image));
            }

            //  store new image in storage
            $path = $request->file('image')->store('users', 'public');

            $data['image'] = $path;
        }

        // 6. Update only provided fields
        $user->update($data);

        // 7. Return response
        return response()->json([
            'status' => true,
            'message' => 'User updated successfully',
            'data' => $user
        ]);
    
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try {
            //  Find user
            $user = UserType::find($id);

            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found'
                ], 404);
            }

            //  Delete tokens (Sanctum)
            if (method_exists($user, 'tokens')) {
                $user->tokens()->delete();
            }

            //  Delete image (if exists)
            if ($user->image && file_exists(public_path('storage/' . $user->image))) {
                unlink(public_path('storage/' . $user->image));
            }

            // 🗑️ Delete user
            $user->delete();

            return response()->json([
                'status' => true,
                'message' => 'User deleted successfully'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // logic for login  logout  by user type 

    public function login(Request $request)
    {
        // Validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:6',
            'userType' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ], 422);
        }

        try {

            // Find user with email + userType
            $user = UserType::where('email', $request->email)
                            ->where('userType', $request->userType)
                            ->first();

            // Check user exists + password match
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Invalid credentials'
                ], 401);
            }

            // Delete old tokens (optional but recommended)
            $user->tokens()->delete();

            // Create token
            $token = $user->createToken('userTypeToken')->plainTextToken;

            return response()->json([
                'status' => true,
                'message' => 'Login successful',
                'token' => $token,
                'user' => $user
            ]);

        } catch (\Exception $e) {

            return response()->json([
                'status' => false,
                'message' => 'Something went wrong',
                'error' => $e->getMessage()
            ], 500);
        }
    }

}
