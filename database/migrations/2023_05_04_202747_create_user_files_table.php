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
        Schema::create('user_files', static function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('slug');
            $table->string('name');
            $table->string('tmp_name');
            $table->integer('size');
            $table->string('mime', 30);
            $table->enum('status', ['Error', 'Uploaded', 'In process', 'Done']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_files');
    }
};
