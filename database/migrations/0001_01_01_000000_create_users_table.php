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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('emp_code', 15)->nullable();
            $table->foreignId('position_id')->nullable()->references('id')->on('positions');
            $table->foreignId('depart_id')->nullable()->references('id')->on('departments');
            $table->foreignId('section_id')->nullable()->references('id')->on('sections');
            $table->foreignId('companies_id')->nullable()->references('id')->on('companies');
            $table->string('telephone_no')->nullable();
            $table->boolean('is_active')->nullable()->default(false);
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        Schema::create('upload_avatar_image_files', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->references('id')->on('users');
            $table->text('filename');
            $table->text('original_name');
            $table->text('file_path');
            $table->integer("file_type")->nullable()->default(0);//0=Avatar,1=Signature
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
        Schema::dropIfExists('upload_avatar_image_files');
    }
};
