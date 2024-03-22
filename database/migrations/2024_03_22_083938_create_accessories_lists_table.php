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
        Schema::create('accessories_lists', function (Blueprint $table) {
            $table->id();
            $table->foreignId('accessories_id')->references('id')->on('accessories');
            $table->foreignId('dealer_id')->references('id')->on('dealers');
            $table->foreignId('receive_by_id')->references('id')->on('users');
            $table->string("no", 25)->unique();
            $table->date('receive_date')->nullable()->useCurrent();
            $table->string("name");
            $table->longText("description")->nullable();
            $table->string("size")->nullable();
            $table->string("serial_no", 25)->unique();
            $table->string("property_no", 25)->nullable();
            $table->boolean('is_active')->nullable()->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accessories_lists');
    }
};
