<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssetTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("Computer PC", "Laptop", "Monitor", "Printer", "UPS","Handheld","Scanner", "Server","CCTV");
        foreach ($data as $value) {
            \App\Models\AssetType::create([
                'name' => $value,
                'description' => $value,
                'is_active' => true,
            ]);
        }
    }
}
