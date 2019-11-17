@extends('reviews/layout')

@section('content')
@can('create_review', $movie)
    <a href="{{action('ReviewController@create', $movie)}}">Add another review</a>
    <br>
@endcan

<a href="{{action('NewMovieController@show', $movie)}}">Go back</a>
<br>

@if($reviews->count() === 0)

    <p>No reviews yet!</p>
@else
    @foreach ($reviews as $review)
        <div class="review">
            <p>Text: {{$review->text}}</p>
            <p>Rating: {{$review->rating}}</p>

            {{-- <p>Rated by: {{$review->user->name}}</p> --}}
                
        </div>  
@endforeach

@endif


@endsection