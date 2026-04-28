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
        Schema::create('tbprontuarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('paciente_id')->constrained('tbpacientes')->onDelete('cascade');
            $table->foreignId('atendimento_id')->constrained('tbatendimentos')->onDelete('cascade');
            $table->foreignId('medico_id')->constrained('tbmedicos')->onDelete('cascade');
            $table->enum('tipo_registro', ['EVOLUCAO', 'PRESCRICAO', 'EXAME_SOLICITADO', 'ATESTADO']);
            $table->text('descricao');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbprontuarios');
    }
};
