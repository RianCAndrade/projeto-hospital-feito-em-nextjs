<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Attributes\Table;
// use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use Laravel\Sanctum\HasApiTokens;

#[Table('tbusuarios', timestamps:true)]
#[Fillable('nome', 'email', 'senha')]
#[Hidden('senha')]
class Usuario extends User
{
    use HasApiTokens;

    protected $casts = [
        'senha' => 'hashed'
    ];

    public function getAuthPassword()
    {
        return $this->senha;
    }
}