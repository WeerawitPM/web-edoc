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
        Schema::create('request_equipment', function (Blueprint $table) {
            $table->id();
            $table->string("document_no", 15)->unique();//document no
            $table->date("request_date")->nullable()->useCurrent();
            $table->integer("revision_seq")->nullable()->default(1);
            $table->longText("remark")->nullable();//description
            $table->longText("spec_description")->nullable();//description
            $table->foreignId('request_id')->references('id')->on('users');
            $table->integer("status")->nullable()->default(0);//0=Draff,1=Wait Approve,2=Wait IT Accepted,3=In Process,4=Unable to process,5=Delivered,4=Received
            $table->foreignId('approve_id')->nullable();// Approve MGR
            $table->timestamps();
        });

        Schema::create('request_equipment_detail', function (Blueprint $table) {
            $table->id();
            $table->foreignId('request_equipment_id')->references('id')->on('request_equipment');
            $table->foreignId('problem_type_id')->references('id')->on('problem_types');
            $table->foreignId('asset_type_id')->references('id')->on('asset_types');
            $table->integer("qty")->nullable()->default(1);
            $table->timestamps();
        });

        Schema::create('request_equipment_staff', function (Blueprint $table) {
            $table->id();
            $table->foreignId('request_equipment_id')->references('id')->on('request_equipment');
            $table->foreignId('accept_by_id')->references('id')->on('users');
            $table->boolean("able_in_process")->nullable()->default(false);
            $table->boolean("unable_to_process")->nullable()->default(false);
            $table->longText("remark")->nullable()->default("-");
            $table->timestamps();
        });

        Schema::create('request_equipment_support', function (Blueprint $table) {
            $table->id();
            $table->foreignId('request_equipment_id')->references('id')->on('request_equipment');
            $table->foreignId('dept_mgr_id')->references('id')->on('users');
            $table->boolean("is_delivered")->nullable()->default(false);
            $table->boolean("unable_to_process")->nullable()->default(false);
            $table->longText("remark")->nullable()->default("-");
            $table->foreignId('div_mgr_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('request_equipment');
        Schema::dropIfExists('request_equipment_detail');
        Schema::dropIfExists('request_equipment_staff');
        Schema::dropIfExists('request_equipment_support');
    }
};
