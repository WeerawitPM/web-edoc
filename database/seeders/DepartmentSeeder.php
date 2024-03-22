<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("-", "IT","HR","ENGINEER");
        foreach ($data as $v){
            \App\Models\Department::create([
                'name' => $v,
                'description' => $v,
                'is_active' => true
            ]);
        }
    }
}
