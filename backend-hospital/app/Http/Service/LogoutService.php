<?php

namespace App\Http\Service;

class LogoutService
{
    public function __construct(){}

    public function logout(object $user)
    {
        $user->currentAccessToken()->delete();
    }
}