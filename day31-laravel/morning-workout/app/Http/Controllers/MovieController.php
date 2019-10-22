<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Movie;

class MovieController extends Controller
{
    public function get_movie(Request $request)
    {
        $movie_ID = $request->input('id');
        return Movie::find($movie_ID);

        
    }
}
