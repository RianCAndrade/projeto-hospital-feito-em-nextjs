<?php

namespace App\Http\Controllers;

use App\Http\Service\LoginService;
use Exception;
use Illuminate\Http\Request;

class LoginController
{
    public function __construct(
        private LoginService $loginServive
    ){}

    public function login(Request $request)
    {
        try {
            $validated = $request->validate([
                'email' => 'required|string|email',
                'senha' => 'required|string'
            ]);

            $result = $this->loginServive->login($validated);

            if(!$result){
                return response()->json([
                    'error' => true,
                    'message' => 'Erro nao encontrado o usuario'
                ], 404);
            }

            return response()->json([
                'error' => false,
                'message' => 'Login efetuado com sucesso',
                'token' => $result
            ], 200);

        } catch (Exception $e){
            return response()->json([
                'error' => true,
                'message' => 'erro inesperado', $e->getMessage()
            ], 500);
        }
    }
}