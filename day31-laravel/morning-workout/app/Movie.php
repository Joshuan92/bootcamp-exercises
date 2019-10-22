<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    public function favored_by_users()
    {
        return $this->belongsToMany('App/User', 'favorite_movies');
    }
}