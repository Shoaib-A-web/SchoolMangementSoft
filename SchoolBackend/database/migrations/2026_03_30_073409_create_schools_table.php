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
        Schema::create('schools', function (Blueprint $table) {
            $table->id();

            $table->string('schoolName');
            $table->string('schoolContact')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->text('schoolAdd')->nullable();
            $table->string('board')->nullable();
            $table->year('established_year')->nullable();

            $table->string('code')->unique();
            $table->string('city')->nullable();
            $table->string('pincode')->nullable();

            $table->string('schoolLogo')->nullable(); // image path

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('schools');
    }
};
