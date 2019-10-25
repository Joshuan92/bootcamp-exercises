@extends('layout')

@section('content')

<div class="movie">
<h1>{{$movie->name}}</h1>
<p>Year of production:{{$movie->year}}</p>
<p>Rating: {{$movie->rating}}</p>
<img src="{{$movie->poster_url}}" alt="" style="width: 300px">
<br>
<a href="{{action('ReviewController@create', $movie->id)}}">Create new review</a>
<a href="{{action('NewMovieController@index')}}">Back to the movies</a>

</div>

@endsection