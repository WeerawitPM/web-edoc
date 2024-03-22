<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DealerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("-");
        foreach ($data as $v){
            \App\Models\Dealer::create([
                'name' => $v,
                'description' => $v,
                'is_active' => true
            ]);
        }
    }
}
