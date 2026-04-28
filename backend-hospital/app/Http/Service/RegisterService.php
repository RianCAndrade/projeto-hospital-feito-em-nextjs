<?php

namespace App\Http\Service;

use App\Http\Repository\RegisterRepository;

class RegisterService
{
    public function __construct(
        private RegisterRepository $registerRepository
    ){}

    public function register(array $validated)
    {
        $dados = $this->registerRepository->register($validated);

        return $dados;
    }
}