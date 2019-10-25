@extends('reviews/layout')

@section('content')

@if($reviews->count() === 0)

    <p>No reviews yet!</p>
@else
    @foreach ($reviews as $review)
        <div class="review">
            <p>Text: {{$review->text}}</p>
            <p>Rating: {{$review->rating}}</p>
                
        </div>  
@endforeach
<a href="{{action('ReviewController@create', $movie_id)}}">Add another review</a>
<br>
<a href="{{action('NewMovieController@show', $movie_id)}}">Go back</a>
@endif


@endsection