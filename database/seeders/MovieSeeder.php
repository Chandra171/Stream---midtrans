<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::insert([
            [
                'name' => 'MV Mumei',
                'slug' => 'mv-mumei',
                'category' => 'music',
                'video_url' => 'https://www.youtube.com/watch?v=oA0CpI0vCK4',
                'thumbnail' => 'https://i.ytimg.com/vi/oA0CpI0vCK4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8BKIAlo09ehiJ7pkfKyk5wBkRjw',
                'rating' => 9.0,
                'is_featured' => true,
            ],
            [
                'name' => 'The Forgotten Song - Nanashi Mumei',
                'slug' => 'the-forgotten-song-nanashi-mumei',
                'category' => 'music',
                'video_url' => 'https://www.youtube.com/watch?v=P-bBKa8Bb_Q',
                'thumbnail' => 'https://i.ytimg.com/vi/P-bBKa8Bb_Q/maxresdefault.jpg',
                'rating' => 8.0,
                'is_featured' => false,
            ],
            [
                'name' => 'Teaser Kisah: La vaguelette | Genshin Impact',
                'slug' => 'teaser-kisah-la-vaguelette-genshin-impact',
                'category' => 'music, game',
                'video_url' => 'https://www.youtube.com/watch?v=kglEsR7bqAY',
                'thumbnail' => 'https://i.ytimg.com/vi/u1MxtaxqX8g/maxresdefault.jpg',
                'rating' => 9.5,
                'is_featured' => true,
            ],
        ]);
    }
}
