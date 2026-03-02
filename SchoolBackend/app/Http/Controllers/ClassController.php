<?php

namespace App\Http\Controllers;

use App\Models\schoolclass;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class ClassController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // get all data of table
        $class= schoolclass::all();
        if (!$class){
            return response()->json([
                'status'=> false,
                'message'=>'class not found'
            ]);
        }

        return response()->json([
                'status'=> true,
                'message'=>'class found',
                'data'=> $class
            ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        //insert data into the table 
        $class = schoolclass::create([
            'class'=> $request->classGrup
        ]);


        
        if (!$class){
            return response()->json([
                'status' => false,
                'message'=> 'class not inserted'
            ]);
        }

        return response()->json([
            'status' => true,
            'message'=> 'class name inserted successfully',
            'data' => $class
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //delete data from table
        $class = schoolclass::find($id);

        if (!$class){
            return response()->json([
                'status'=> false,
                'message'=>'class not found'
            ]);
        }

        $class->delete();
        
        return response()->json([
            'status'=> true,
            'message'=>'class is deleted'
        ]);
        
    }


    // to search by class grup
    public function searchByName(Request $request)
    {
        $classe = SchoolClass::where('class', $request->classGroup)->get();

        if ($classe->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No data found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => [$classe]
        ]);
    }
}
