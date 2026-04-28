<?php

namespace App\Http\Controllers;

use App\Http\Service\RegisterService;
use Illuminate\Http\Request;

class RegisterController
{
    public function __construct(
        private RegisterService $registerService
    ){}

    public function register(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|string|max:255',
            'email' => 'required|string|max:255',
            'senha' => 'required|string|max:255',
        ]);

        $result = $this->registerService->register($validated);

        if(!$result){
            return response()->json([
                'error' => true,
                'message' => 'má requesição'
            ], 402);
        }

        return response()->json([
            'error' => false,
            'message' => 'Usuario Cadastrado com sucesso'
        ], 201);
    }
}