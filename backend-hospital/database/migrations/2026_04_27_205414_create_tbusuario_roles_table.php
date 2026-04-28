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
        Schema::create('tbusuario_roles', function (Blueprint $table) {
            $table->foreignId('usuario_id')->constrained('tbusuarios')->onDelete('cascade');
            $table->foreignId('role_id')->constrained('tbroles')->onDelete('cascade');
            $table->primary(['usuario_id', 'role_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbusuario_roles');
    }
};
