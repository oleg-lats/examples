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
        Schema::create('user_file_results', static function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_file_id');
            $table->string('rsid_number');
            $table->string('chromosome');
            $table->integer('position');
            $table->string('genotype_major', 1)->nullable();
            $table->string('genotype_minor', 1)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_file_results');
    }
};
