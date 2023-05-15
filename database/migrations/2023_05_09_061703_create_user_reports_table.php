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
        Schema::create('user_reports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_file_id');
            $table->bigInteger('user_id');
            $table->bigInteger('report_id');
            $table->string('report_name');
            $table->float('score_total', 2)->default(0);
            $table->float('percentage_total', 2)->default(100);
            $table->float('user_score_total', 2)->default(0);
            $table->float('user_percentage_total', 2)->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_reports');
    }
};
