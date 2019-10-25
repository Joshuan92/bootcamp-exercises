<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{

    public function reviews()
    {
        return $this->hasMany('App\Review', 'movie_id', 'id');
    }

    public function ratings()
    {
        return $this->hasMany('App\Rating');
    }

    public function people()
    {
        return $this->belongsToMany('App\Person');
    }
}
