<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movie;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\Admin\Movie\Store;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::all();
        return inertia('Admin/Movie/Index',[
            "movies" => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {

        // $request->validate([
        //     'name' => 'required|unique:movies,name',
        //     'category' => 'required',
        //     'video_url' => 'required|url',
        //     'thumbnail' => 'required|image',
        //     'rating' => 'required|numeric|min:0|max:5',
        //     'is_featured' => 'nullable|boolean'
        // ]);

        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
        $data['slug'] = Str::slug($data['name']); //Misal nama movie "MV Mumei" slug nya akan menjadi "mv-mumei"

        Movie::create($data);
        // $movie = Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Movie Inserted Succesfully',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', [
            'movie' => $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();
        if($request->file('thumbnail')){
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));
            Storage::disk('public')->delete($movie->thumbnail);
        }else{
            $data['thumbnail'] = $movie->thumbnail;
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => 'Movie Inserted Succesfully',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        //
    }
}
