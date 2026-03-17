<?php

namespace App\Models;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class UserType extends Authenticatable
{
    
    use HasApiTokens;

    protected $table = 'user_types';
    
    protected $primaryKey = 'user_id';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'gender',
        'userType',
        'contact',
        'aadhar',
        'age',
        'image',
        'password'
    ];

    protected $hidden = [
        'password'
    ];
}
