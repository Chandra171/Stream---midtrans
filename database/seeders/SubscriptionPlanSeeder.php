<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SubscriptionPlan::insert([
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_months' => 3,
                'features' => json_encode(['feature 1', 'feature 2']),
            ],
            [
                'name' => 'Premium',
                'price' => 999000,
                'active_period_in_months' => 6,
                'features' => json_encode(['feature 1', 'feature 2', 'feature 3', 'feature 4', 'feature 5']),
            ]
        ]);
    }
}
