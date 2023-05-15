<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('health_report_diet_genes', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('health_report_id');
            $table->string('key');
            $table->boolean('minor_allele_risk')->default(false);
            $table->boolean('major_allele_risk')->default(false);
            $table->string('major_amino_acid', 20)->nullable();
            $table->string('science_score', 20)->nullable();
            $table->string('name', 20)->nullable();
            $table->string('rsid_number', 50)->nullable();
            $table->string('gene_sanity_id', 50)->nullable();
            $table->string('minor_amino_acid', 20)->nullable();
            $table->float('minor_allele_frequency')->nullable();
            $table->string('minor_allele', 20)->nullable();
            $table->string('major_allele', 20)->nullable();
            $table->integer('score')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('health_report_diet_genes');
    }
};
