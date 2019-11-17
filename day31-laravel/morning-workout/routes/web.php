<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/api/collection', 'CollectionController@store');
Route::get('/api/collection', 'CollectionController@user_lists');

Route::get('/api/movie', 'MovieController@get_movie');

Route::post('/api/review', 'ReviewController@store');

//day 32 morning workout
Route::post('/api/movies/favorite/toggle', 'FavoriteMovieController@toggle');
Route::get('/api/movies/favorite', 'FavoriteMovieController@status');

Route::get('/', 'IndexController@index');

Route::get('/slavo', 'NewMovieController@index');