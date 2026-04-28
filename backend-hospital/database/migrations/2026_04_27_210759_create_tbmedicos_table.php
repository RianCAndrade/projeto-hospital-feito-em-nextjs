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
        Schema::create('tbmedicos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->unique()->constrained('tbusuarios')->onDelete('cascade');
            $table->string('crm')->unique();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbmedicos');
    }
};
