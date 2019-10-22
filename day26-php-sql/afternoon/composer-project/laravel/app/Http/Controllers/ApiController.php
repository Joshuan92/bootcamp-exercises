<?php
 
namespace App\Http\Controllers;

use DB; 
use Illuminate\Http\Request;
 
class ApiController extends Controller
{
    public function index()
    {
        // the logic of your page will be here
        $query = "SELECT *
                    FROM `movies`
                    WHERE 1
                    ORDER BY `rating` DESC
                    LIMIT 10";

        $top_movies = DB::select($query);
        return $top_movies;
 
        // as response we will return an array of data
        return [
            'success' => true,
            'message' => 'Response successfully returned.',
            'errors' => [],
            'data' => []
        ];
    }

    public function search_people(Request $request){

        $persons_name = $request->input('search');

        $query = "SELECT *
                    FROM `people`
                    WHERE `name` LIKE ?";

        $people = DB::select($query, ["%{$persons_name}%"]);
        return $people;

    }

    public function cast_and_crew(Request $request){

        if (!$request->has('id'))
        {
            return [
                'error' => 'please specify the id of the money'
            ];
            
        }

        $movie_id = $request->input('id',34);

        $query = "SELECT *
                    FROM `movie_person`
                    WHERE `movie_id` = ?";

        $movie_persons = DB::select($query, [$movie_id]);

        // return $movie_persons;

        $person_ids = [];

        foreach($movie_persons as $person)
        {
            $person_ids[] = $person->person_id;
        }

        $person_ids_string = join(', ', $person_ids);

        $query = "SELECT *
                    FROM `people`
                    WHERE `id` IN ({$person_ids_string})";

        $people = DB::select($query);

        return $people;
    }

    public function form()
    {
        return view('form');

    }

    public function handleForm(Request $request)
    {
        $search_term = $request->input('search');

        $query = "SELECT *
                    FROM `movie_person`
                    WHERE `movie_id` LIKE ?";

        $movie_persons = DB::select($query, ["%$search_term%"]);

        return $movie_persons;

    }

}