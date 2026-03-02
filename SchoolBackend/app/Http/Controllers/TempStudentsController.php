<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TempStudent;
use Illuminate\Support\Facades\Validator;


class TempStudentsController extends Controller
{
    // getting data of temprory student 
    public function index(){
        //
        $students= TempStudent::latest()->get();

        return response()->json([
            'status' => true,
            'data' => $students
        ]);
    }
    //to insrert value 
    public function store(Request $request){
        //validation 
        $validator=Validator::make(
            $request->all(),
            [
            'name'=>'required',
            'email' => 'required|email|unique:temp_students',
            'phone' => 'nullable'
            ]
        );

        if ($validator->fails()){
            $error= $validator->errors();


            return response()->json([
                'status'=> false,
                'message'=>$error->first('email')
            ]);

        }else{

        $student = TempStudent::create($request->all());

        return response()->json([
            'status'=> true,
            'message'=> 'Data inserted successfully',
            'data'=> $student
        ]);
        }
    }

    public function show(string $id){
        //find student by id
        $student= TempStudent::find($id);

        if (!$student){
            return response()-> json([
                'status'=> false,
                'message'=>'student not found'
            ]);
        }

        return response()->json([
            'status'=> true,
            'data'=>$student
        ]);
    }
}