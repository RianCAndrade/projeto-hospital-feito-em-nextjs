<?php

namespace App\Http\Repository;

use App\Models\Usuario;

class RegisterRepository
{
    public function __construct(
        private Usuario $usuario
    ){}

    public function register(array $dados)
    {
        return $this->usuario->create($dados);       
    }
}