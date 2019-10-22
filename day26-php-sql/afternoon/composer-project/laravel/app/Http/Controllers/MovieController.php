<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    public function index(Request $request)
    {
        $orderby = $request->input('orderby');
        if (!in_array($orderby,['name','rating','year']))
        {
            $orderby = 'name';
        }

        $orderway = $request->input('orderway','asc');
        $limit = $request->input('limit',10);
        $page = max(1,$request->input('page', 1));
        $search = $request->input('search', null);
        $year = $request->input('year', null);
        $minrating = $request->input('minrating', null);
        
        //initialize the query builder
        $query = DB::table('movies');

        //modify the query builder
        $query->orderBy($orderby, $orderway)
            ->limit($limit)
            ->offset(($page-1) * $limit);

        if ($search !== null) {
            $query->where('name', 'like', "%{$search}%");
        }

        if ($year !== null) {
            $query->where('year', $year);
        }

        if ($minrating !== null) {
            $query->where('rating', '>', $minrating);
        }


        
        // execute the query built by the query builder and get the results
        $movies=$query->get();

        return $movies;
    }

    public function cast_and_crew(Request $request)
    {
        $id = $request->input('id');

        if ($id === null)
        {
            return [];
        }

        $personID = DB::table('movie_person')
            ->where('movie_id', $id)
            ->pluck('person_id');

        $people = DB::table('people')
                ->whereIn('id', $personID)
                ->get();

        return $people;
    }
    
    public function movies()
    {
        $query = "SELECT *
                    FROM `movie`
                    WHERE `ratings`> ?
                    ORDER BY `name`
                    LIMIT 10
        ";

        $query_builder = DB::table('movies');
        $query_builder->limit(10);
        $query_builder->where('rating', '>', 6);
        $query_builder->orderBy('name', 'asc');

        $movie_names = $query_builder->count();

        $movies = DB::table('movies')
            ->orderBy('name', 'asc')
            ->where('rating', '>', 6)
            ->limit(10)
            ->get();

        return $movies;
    }

    public function show(Request $request)
    {
        $id = $request->input('id');

        $movie = \App\Movie::find($id);

        // var_dump($movie);

        return $movie->people;

        
    }
}
