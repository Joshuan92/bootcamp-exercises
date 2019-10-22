<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DB;

class ReviewController extends Controller
{
    public function index()
    {
        return DB::table('reviews')
                    ->get();
    }

    public function store(Request $request)
    {
        $newID = DB::table('reviews')
            ->insertGetId([
            'movie_id' => 1500, 
            'user_id' => 3,
            'text' => 'Valar morghulis',
            'rating' => 8
        ]);

        return [
            'status' => 'success',
            'message' => 'Inserted successfully',
            'data' => [
                'id' => $newID
            ]
            ];
         
        

    }
}
