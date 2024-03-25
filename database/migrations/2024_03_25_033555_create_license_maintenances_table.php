<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('license_maintenances', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("contract_no");
            $table->foreignId('software_id')->references('id')->on('software_maintenances');
            $table->foreignId('user_id')->references('id')->on('users');//ผู้รับผิดชอบ
            $table->foreignId('assets_id')->references('id')->on('assets');
            $table->float("ma_price")->nullable()->default(0);
            $table->float("real_price")->nullable()->default(0);
            $table->date("ma_date")->nullable()->useCurrent();
            $table->string("subscription_id")->nullable();
            $table->longText("description")->nullable();
            $table->integer("is_status")->nullable()->default(0);//0 = None,1=Active
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('license_maintenances');
    }
};
