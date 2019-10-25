<?php

namespace App\Http\Controllers;
use App\Movie;

use Illuminate\Http\Request;

class NewMovieController extends Controller
{
    public function index()
    {
        $movies = Movie::orderBy('id', 'desc')->limit(10)->get();

        return view('index', compact('movies'));
    }

    public function show($id)
    {
        $movie = Movie::findOrFail($id);
        
        return view('show', compact('movie','id'));

    }
}
