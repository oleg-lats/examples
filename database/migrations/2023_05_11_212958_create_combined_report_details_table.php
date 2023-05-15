<?php

use App\Models\HealthReport;
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
        Schema::create('combined_report_details', static function (Blueprint $table) {
            $table->id();
            $table->bigInteger('combined_report_id');
            $table->foreignIdFor(HealthReport::class);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('combined_report_details');
    }
};