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
        Schema::create('tbconsultas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('paciente_id')->constrained('tbpacientes')->onDelete('cascade');
            $table->foreignId('medico_id')->constrained('tbmedicos')->onDelete('cascade');
            $table->dateTime('data_hora');
            $table->enum('status', ['AGENDADA', 'EM_ATENDIMENTO', 'CONCLUIDA', 'CANCELADA'])->default('AGENDADA');
            $table->enum('origem', ['AGENDAMENTO', 'TRIAGEM']);
            $table->string('observacoes_agendamento')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbconsultas');
    }
};
