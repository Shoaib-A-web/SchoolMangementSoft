<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\contact;

class ContactController extends Controller
{
    //for insert(create)
    public function store(Request $request)
    {
        $contact = Contact::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
        ]);

        return response()->json([
            'status' => true,
            'message' => 'Contact created successfully',
            'data' => $contact
        ]);
    }

    //for get all data (read)
    public function index()
    {
        $contacts = Contact::all();

        return response()->json([
            'status' => true,
            'data' => $contacts
        ]);
    }

    //for search by id 
    public function show($id)
    {
        $contact = Contact::find($id);

        if(!$contact){
            return response()->json([
                'status' => false,
                'message' => 'Not found'
            ]);
        }

        return response()->json([
            'status' => true,
            'data' => $contact
        ]);
    }
    // update by id 
    public function update(Request $request, $id)
    {
        $contact = Contact::find($id);

        if(!$contact){
            return response()->json(['status'=>false]);
        }

        $contact->update([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
        ]);

        return response()->json([
            'status'=>true,
            'message'=>'Updated successfully'
        ]);
    }

    //for delete by id

    public function destroy($id)
    {
        $contact = Contact::find($id);  

        if(!$contact){
            return response()->json(['status'=>false]);
        }

        $contact->delete();

        return response()->json([
            'status'=>true,
            'message'=>'Deleted successfully'
        ]);
    }
}
