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

Route::get('/api', 'ApiController@index');
Route::get('/api/search/people', 'ApiController@search_people');
Route::get('/api/search/cast_crew', 'ApiController@cast_and_crew');

// Route::get('/api/movies', 'MovieController@movies');
// Route::get('/api/movies/list', 'MovieController@index');
// Route::get('/api/movies/cast-crew', 'MovieController@cast_and_crew');
// Route::get('/api/movies/show', 'MovieController@show');

Route::get('/api/review', 'Api\ReviewController@index');
Route::post('/api/review', 'Api\ReviewController@store');


Route::get('/api/rating', 'Api\RatingController@index');
Route::post('/api/rating', 'Api\RatingController@store');
Route::put('/api/rating', 'Api\RatingController@update');
Route::delete('/api/rating', 'Api\RatingController@destroy');

Route::get('/api/form', 'ApiController@form');
Route::post('/api/form','ApiController@handleForm' );

// Route::resource('/api/review', 'ReviewController');
// Route::resource('/api/rating', 'RatingController');

Route::get('/api/top-rated', 'TopRatedController@topRated');

Route::get('/api/movie-of-the-week', 'TopRatedController@movieOfTheWeek');

//day34 with slavo
Route::get('/movies', 'NewMovieController@index');
Route::get('/movies/{id}', 'NewMovieController@show');

Route::get('/movies/{movie}/reviews', 'ReviewController@index');

Route::get('/movies/{movie}/reviews/create', 'ReviewController@create')->middleware('auth');
Route::post('/movies/{movie}/reviews', 'ReviewController@store')->middleware('auth');

Route::get('/sort', 'SortingController@show');

Route::get('/ruler', 'RulerController@show');


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

// exercise on 29.10.2019
Route::resource('new-person', 'NewPersonController');

