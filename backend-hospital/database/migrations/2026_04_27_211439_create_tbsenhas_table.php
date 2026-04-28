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
        Schema::create('tbsenhas', function (Blueprint $table) {
            $table->id();
            $table->string('numero');
            $table->foreignId('paciente_id')->nullable()->constrained('tbpacientes')->onDelete('set null');
            $table->foreignId('consulta_id')->nullable()->constrained('tbconsultas')->onDelete('set null');
            $table->enum('status', ['AGUARDANDO', 'CHAMANDO', 'ATENDIDO', 'CANCELADO'])->default('AGUARDANDO');
            $table->integer('prioridade_nivel')->default(0);
            $table->enum('prioridade_tipo', ['NORMAL', 'IDOSO', 'GESTANTE', 'PCD', 'URGENCIA'])->default('NORMAL');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbsenhas');
    }
};
