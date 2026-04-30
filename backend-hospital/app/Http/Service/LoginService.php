<?php

namespace App\Http\Service;

use App\Http\Repository\LoginRepository;
use Illuminate\Support\Facades\Hash;

class LoginService
{
    public function __construct(
        private LoginRepository $loginRepository
    ){}

    public function login(array $dados)
    {
        $email = $dados['email'];
        $senha = $dados['senha'];
        $dados = $this->loginRepository->findByEmail($email);

        if (!$dados || !Hash::check($senha, $dados->senha)){
            return null;
        }

        $token = $dados->createToken('auth')->plainTextToken;

        return $token;
    }
}