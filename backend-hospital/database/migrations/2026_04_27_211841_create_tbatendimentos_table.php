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
        Schema::create('tbatendimentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('senha_id')->constrained('tbsenhas')->onDelete('cascade');
            $table->foreignId('paciente_id')->constrained('tbpacientes')->onDelete('cascade');
            $table->foreignId('medico_id')->constrained('tbmedicos')->onDelete('cascade');
            $table->foreignId('consulta_id')->nullable()->constrained('tbconsultas')->onDelete('set null');
            $table->enum('status', ['EM_TRIAGEM', 'EM_ATENDIMENTO', 'FINALIZADO'])->default('EM_TRIAGEM');
            $table->dateTime('iniciado_em')->nullable();
            $table->dateTime('finalizado_em')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbatendimentos');
    }
};
