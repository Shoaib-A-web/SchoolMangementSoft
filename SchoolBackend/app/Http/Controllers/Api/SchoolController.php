<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //  GET ALL
        return response()->json(
            School::latest()->get()->map(function ($school) {
                return [
                    'id' => $school->id,
                    'schoolName' => $school->schoolName,
                    'code' => $school->code,
                    'schoolContact' => $school->schoolContact,
                    'email' => $school->email,
                    'website' => $school->website,
                    'schoolAdd' => $school->schoolAdd,
                    'board' => $school->board,
                    'city' => $school->city,
                    'pincode' => $school->pincode,
                    'established_year' => $school->established_year,

                    //  IMPORTANT LINE for image handling
                    'logo' => $school->schoolLogo 
                        ? asset('storage/' . $school->schoolLogo) 
                        : null,
                ];
            })
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $data = $request->all();

        // image upload
        if ($request->hasFile('schoolLogo')) {
            $file = $request->file('schoolLogo');
            $path = $file->store('schools', 'public');
            $data['schoolLogo'] = $path;
        }

        $school = School::create($data);

        return response()->json([
            'message' => 'School created successfully',
            'data' => [
                ...$school->toArray(),
                'logo' => $school->schoolLogo 
                    ? asset('storage/' . $school->schoolLogo) 
                    : null,
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show single
        $school = School::findOrFail($id);
        return response()->json([
            ...$school->toArray(),
            'logo' => $school->schoolLogo 
                ? asset('storage/' . $school->schoolLogo) 
                : null,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
     // UPDATE (IMPORTANT  Partial Update)
    public function update(Request $request, string $id)
    {
        $school = School::findOrFail($id);

        $data = $request->all();

        // image update
        if ($request->hasFile('schoolLogo')) {
            $file = $request->file('schoolLogo');
            $path = $file->store('schools', 'public');
            $data['schoolLogo'] = $path;
        }

        // ONLY UPDATE PROVIDED FIELDS
        $school->update($data);

        return response()->json([
            'message' => 'School updated successfully',
            'data' => $school
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $school = School::findOrFail($id);
        $school->delete();

        return response()->json([
            'message' => 'School deleted successfully'
        ]);
    }
}
