<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $table = 'people';

    public $timestamps = false;

    protected $fillable = [
        'name',
        'photo_url',
        'biography',
        'profession_id'
    ];


// black list of colums
// if it is empty => everything is on the white list
    protected $guarded = [

    ];
}
