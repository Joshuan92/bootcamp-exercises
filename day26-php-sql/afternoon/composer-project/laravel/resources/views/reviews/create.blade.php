@extends('layout')


@section('content')

 <div class="review_create">
    <h1>Create a new review for {{$movie->name}}</h1>
 
    <img src="{{$movie->poster_url}}" alt="" style="width: 300px">

 <form action="{{action('ReviewController@store', $movie->id )}}" method="POST">
    @csrf
    <br>
    <div >
        <label for="value">Value</label>
        <input name="value" type="number" value="{{old('value')}}" style="{{$errors->has('value') ? 'border-color: red' : ''}}">
        {{$errors->first('value')}}
    </div>

    <div>
            <label for="text">Textarea:</label>
            <br>
            <textarea name="text" id="" cols="30" rows="10" style="{{$errors->has('text') ? 'border-color: red' : ''}}">{{old('text')}} </textarea>
            {{$errors->first('text')}}
    </div>

    <button type="submit">Create</button>

</form>


    

</div>
    

@endsection