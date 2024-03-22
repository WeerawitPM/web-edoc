<?php

namespace Database\Seeders;

use App\Models\Area;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("VCS", "VCST", "BVS", "AAA");
        foreach ($data as $value) {
            echo($value);
            Area::create([
                'name' => $value,
                'description' => $value,
                'is_active' => true,
            ]);
        }
    }
}
