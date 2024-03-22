<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProblemTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("Hardware", "Software", "Virus", "Printer", "CCTV", "Handheld", "Scanner", "Laptop", "Desktop");
        foreach ($data as $value) {
            \App\Models\ProblemType::create([
                'name' => $value,
                'description' => $value,
                'is_active' => true,
            ]);
        }
    }
}
