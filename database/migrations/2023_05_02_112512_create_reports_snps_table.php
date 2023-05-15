<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('reports_snps', static function (Blueprint $table) {
            $table->id();
            $table->string('sanity_id', 50);
            $table->string('gene', 50);
            $table->string('rsid_number');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reports_snps');
    }
};
