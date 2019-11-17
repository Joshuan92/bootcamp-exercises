<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\App;

class StoreController extends Controller
{
    public function index()
    {

        $apps = App::with('category')
                        ->with('genres')
                        ->orderBy('title')
                        ->limit(100)
                        ->get();

        return view('index', ['apps' => $apps]);
    }
}
