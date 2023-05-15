<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('genes', static function (Blueprint $table) {
            $table->id();
            $table->string('sanity_id', 50);
            $table->string('name')->nullable();
            $table->string('protein_name')->nullable();
            $table->dateTime('post_date')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('genes');
    }
};
