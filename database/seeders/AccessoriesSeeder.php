<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AccessoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("เมาส์ไร้สาย", "เมาส์มีสาย", "คีย์บอร์ด", "แผ่นรองเมาส์");
        foreach ($data as $value) {
            \App\Models\Accessories::create([
                'name' => $value,
                'description' => $value,
                'is_active' => true,
            ]);
        }
    }
}
