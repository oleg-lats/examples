<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('diet_types', static function (Blueprint $table) {
            $table->id();
            $table->string('sanity_id', 50);
            $table->string('name')->nullable();
            $table->string('slug')->nullable();
            $table->string('fat')->nullable();
            $table->string('icon')->nullable();
            $table->string('carbohydrate')->nullable();
            $table->string('protein')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('diet_types');
    }
};
