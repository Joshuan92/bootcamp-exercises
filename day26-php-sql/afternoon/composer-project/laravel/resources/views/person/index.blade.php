@extends('layouts.app')

@section('content')
    <h1 style="margin: 10px 20px">Persons</h1>

    @foreach ($persons as $person)

    <div style="margin: 0px 20px">
        Person´s name: 
        <strong>
            <a href="{{action('NewPersonController@show', $person->id)}}">{{$person->name}}</a>
            
        </strong>
    
    </div>
        
    @endforeach
    <br>

    {{ $persons-> links() }}
    
@endsection