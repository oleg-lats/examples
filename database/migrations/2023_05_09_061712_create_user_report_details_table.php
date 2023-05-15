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
        Schema::create('user_report_details', static function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_report_id');
            $table->string('gene_name')->nullable();
            $table->string('rsid_number')->nullable();
            $table->string('non_risk_allele')->nullable();
            $table->string('risk_allele')->nullable();
            $table->integer('score')->nullable();
            $table->string('user_genotype_major')->nullable();
            $table->float('user_genotype_major_result')->nullable();
            $table->string('user_genotype_minor')->nullable();
            $table->float('user_genotype_minor_result')->nullable();
            $table->float('user_score')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_report_details');
    }
};
