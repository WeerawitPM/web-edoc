<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DocumentAttachSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = array("Proposals", "MISC", "WI","Flowchart", "Other");
        foreach ($data as $key => $value) {
            \App\Models\DocumentAttach::create([
                'name' => $value,
                'description' => $value,
                'is_active' => true,
            ]);
        }
    }
}
