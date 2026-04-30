<?php

namespace App\Http\Service;

use App\Http\Repository\RegisterRepository;
use Illuminate\Support\Facades\Hash;

class RegisterService
{
    public function __construct(
        private RegisterRepository $registerRepository
    ){}

    public function register(array $validated)
    {
        // $validated['senha'] = Hash::make($validated['senha']);

        $dados = $this->registerRepository->register($validated);

        return $dados;
    }
}