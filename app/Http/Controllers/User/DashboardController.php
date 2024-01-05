<?php

namespace App\Http\Controllers\User;

use Inertia\Inertia;
use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    public function index(){

        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();

        // return ['featuredMovies' => $featuredMovies, 'movies' => $movies];
        return Inertia::render('User/Dashboard/Index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);
    }
}
