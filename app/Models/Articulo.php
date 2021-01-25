<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    protected $fillable = [
        'Nombre',
        'Precio',
        'Stock',
        'Seccion'
    ];

    private $timestamps = false;

    use HasFactory;
}
