<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $data = array([
        //     'name' => 'VCS',
        //     'description' => 'VCS Thai',
        //     "domain_name" => "vcsthai.com",
        //     "domain_mail" => "@vcsthai.com",
        //     'is_active' => true
        // ]);

        // VCS
        Company::create([
            'name' => 'VCS',
            'description' => 'VCS Thai',
            "domain_name" => "vcsthai.com",
            "domain_mail" => "@vcsthai.com",
            'is_active' => true
        ]);

        // VCST
        Company::create([
            'name' => 'VCST',
            'description' => 'VCS Thailand',
            "domain_name" => "vcsthailand.co.th",
            "domain_mail" => "@vcsthailand.co.th",
            'is_active' => true
        ]);

        // BVS
        Company::create([
            'name' => 'BVS',
            'description' => 'BVS Company',
            "domain_name" => "bvs.co.th",
            "domain_mail" => "@bvs.co.th",
            'is_active' => true
        ]);

        // AAA
        Company::create([
            'name' => 'AAA',
            'description' => 'AAA Company',
            "domain_name" => "aaa.co.th",
            "domain_mail" => "@aaa.co.th",
            'is_active' => true
        ]);

        // TKM
        Company::create([
            'name' => 'TKM',
            'description' => 'TKM Company',
            "domain_name" => "tkm.co.th",
            "domain_mail" => "@tkm.co.th",
            'is_active' => true
        ]);

        // TKM
        Company::create([
            'name' => 'TKM Thaikin',
            'description' => 'TKM Thaikin Company',
            "domain_name" => "tkm-thaikin.co.th",
            "domain_mail" => "@tkm-thaikin.co.th",
            'is_active' => true
        ]);
    }
}
