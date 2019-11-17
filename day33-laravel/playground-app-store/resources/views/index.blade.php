@extends('layout')

@section('content')

    <h1>This is the homepage!</h1>

    <ul>
            <?php foreach ($apps as $app) : ?>
            <li>Title:{{$app['title']}}
                <br>
                Category: {{$app->category->name}}
                <br>
                Genre: {{$app->genres[0]->name}}
                
                

                
                
                
            
            
            </li>


            <?php endforeach ?>

    
    </ul>
    
    
@endsection

    
