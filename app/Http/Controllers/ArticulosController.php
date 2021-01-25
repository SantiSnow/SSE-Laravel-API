<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use Illuminate\Http\Request;

class ArticulosController extends Controller
{

    public function todosLosArticulos(){
        return Articulo::all();
    }

    public function actualizarArticulo(Request $req){
        $id = $req->get('id');
        $precio = $req->get('precio');

        $articulo = Articulo::find($id);
        $articulo->Precio = $precio;

        $articulo->save();
    }
}
