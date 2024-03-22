<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PositionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("-","Worker", "Officer", "Sup.", "Leader", "Manager");
        foreach ($data as $v){
            \App\Models\Position::create([
                'name' => $v,
                'description' => $v,
                'is_active' => true
            ]);
        }
    }
}
