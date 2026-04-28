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
        Schema::create('tbpacientes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->unique()->constrained('tbusuarios')->onDelete('cascade');
            $table->string('cpf')->unique();
            $table->date('data_nascimento');
            $table->string('telefone');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbpacientes');
    }
};
