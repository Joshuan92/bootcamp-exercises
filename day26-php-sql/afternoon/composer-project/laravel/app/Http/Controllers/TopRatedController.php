<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class TopRatedController extends Controller
{
    public function topRated()
    {
        $movies = DB::table('movies')
            ->orderBy('rating', 'desc')
            ->limit(10)
            ->get();

        return $movies;
    }

    public function movieOfTheWeek()
    {


        $movie_id = 100;
        $movieGenre = DB::table('movies')
            ->where('id', $movie_id)
            ->pluck('id');

        $genreID = DB::table('genre_movie')
            ->whereIn('movie_id', $movieGenre)
            ->pluck('genre_id');

        $genre = DB::table('genres')
                ->whereIn('id', $genreID)
                ->pluck('name');

        $personID = DB::table('movie_person')
                ->where('movie_id', $movie_id)
                ->pluck('person_id');
    
        $people = DB::table('people')
                ->whereIn('id', $personID)
                ->limit(3)
                ->get();

        $movie = DB::table('movies')
                ->where('id', $movie_id)
                ->first();

        return [
            'movie' => $movie,
            'genre' => $genre,
            'people'=> $people

        ];
    }


}
