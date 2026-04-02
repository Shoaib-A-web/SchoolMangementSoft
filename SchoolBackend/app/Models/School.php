<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    //
    protected $fillable = [
        'schoolName',
        'schoolContact',
        'email',
        'website',
        'schoolAdd',
        'board',
        'established_year',
        'code',
        'city',
        'pincode',
        'schoolLogo'
    ];
}

