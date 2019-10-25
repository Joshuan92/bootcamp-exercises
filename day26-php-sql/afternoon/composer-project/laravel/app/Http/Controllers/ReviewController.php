<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Review;
use App\Movie;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($movie_id)
    {
        
        $movie = Movie::findOrFail($movie_id);

        $reviews = Movie::findOrFail($movie_id)->reviews()->get();

        return view('reviews/index', compact('reviews', 'movie_id'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($movie)
    {
        $movie = Movie::findOrFail($movie);
        return view('reviews.create', compact('movie'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store($movie, Request $request)
    {
        $this->validate($request,[
            'value' => 'required|numeric|min:1|max:10',
            'text' => 'required|min:10|max:160'

        ],
        [
            'value.required' => 'THAT IS COMPLETELY WRONG!',
            'text.required' => 'THAT IS COMPLETELY, UTTERLY WRONG!'

        ]);

        $review = new Review();
        $review->user_id = rand(1, 10000);
        $review->movie_id = $movie;

        $review->text = $request->input('text');
        $review->rating = $request->input('value');
        $review->save();

        return redirect(action('ReviewController@index', $movie));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
