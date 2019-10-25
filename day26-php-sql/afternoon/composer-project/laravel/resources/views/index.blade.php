@extends('layout')

@section('content')

@foreach ($movies as $movie)
    <div class="movie">
    <h1>{{$movie->name}}</h1>
    <p>Year of production:{{$movie->year}}</p>
    <p>Rating: {{$movie->rating}}</p>
    <img src="{{$movie->poster_url}}" alt="" style="width: 300px">
    <br>
    <a href="{{action('NewMovieController@show', $movie->id)}}">Open detail</a>
    <a href="{{action('ReviewController@create', $movie->id)}}">Create new review</a>
        
    </div>
    
@endforeach

@endsection