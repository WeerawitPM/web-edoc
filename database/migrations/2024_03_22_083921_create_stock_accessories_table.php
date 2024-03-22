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
        Schema::create('stock_accessories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('accessories_id')->references('id')->on('accessories');
            $table->integer("total")->nullable()->default(0);
            $table->boolean("is_active")->nullable()->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('stock_accessories');
    }
};
