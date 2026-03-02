<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TempStudent extends Model
{
    //
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone'
    ];
}
