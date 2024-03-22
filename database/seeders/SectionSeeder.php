<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("-");
        foreach ($data as $v){
            \App\Models\Section::create([
                'name' => $v,
                'description' => $v,
                'is_active' => true
            ]);
        }
    }
}
