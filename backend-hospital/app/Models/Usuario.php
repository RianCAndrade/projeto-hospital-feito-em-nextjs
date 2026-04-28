<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Attributes\Hidden;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Model;

#[Table('tbusuarios', timestamps:true)]
#[Fillable('nome', 'email', 'senha')]
#[Hidden('senha')]
class Usuario extends Model
{}