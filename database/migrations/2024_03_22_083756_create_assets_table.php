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
        Schema::create('assets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('asset_type_id')->references('id')->on('asset_types');
            $table->foreignId('dealer_id')->references('id')->on('dealers');
            $table->foreignId('receive_by_id')->references('id')->on('users');
            $table->string("no", 25)->unique();
            $table->date('receive_date')->nullable()->useCurrent();
            $table->string("name");
            $table->longText("description")->nullable();
            $table->string("size")->nullable();
            $table->string("serial_no", 25)->unique();
            $table->string("property_no", 25)->nullable();
            $table->string("ram_size", 25)->nullable();
            $table->string("main_board", 25)->nullable();
            $table->string("vga_size", 25)->nullable();
            $table->string("hdd_size", 25)->nullable();
            $table->string("sd_size", 25)->nullable();
            $table->boolean('dvd_drive')->nullable()->default(false);
            $table->string("case_description")->nullable();
            $table->ipAddress('ip_address')->nullable();
            $table->macAddress('mac_address')->nullable();
            $table->date('start_warranty_date')->nullable();
            $table->date('end_warranty_date')->nullable();
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assets');
    }
};
