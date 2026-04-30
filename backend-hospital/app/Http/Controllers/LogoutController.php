<?php

namespace App\Http\Controllers;

use App\Http\Service\LogoutService;
use Exception;
use Illuminate\Http\Request;

class LogoutController
{
    public function __construct(
        private LogoutService $logoutService
    ){}

    public function logout(Request $request)
    {
        try {
            $this->logoutService->logout($request->user());

            return response()->json([
                'error' => false,
                'message' => 'Logout realizado com sucesso'
            ],200);
        } catch (Exception $e) {
            return response()->json([
                'error' => true,
                'message' => 'erro inesperado', $e->getMessage()
            ], 500);
        }
    }
}