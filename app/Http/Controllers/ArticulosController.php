<?php

namespace App\Http\Controllers;

use App\Models\Articulo;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class ArticulosController extends Controller
{

    public function todosLosArticulos(Request $request){


        $response = new StreamedResponse(function () use ($request){
            while(true) {
                echo 'data: ' . json_encode(Articulo::all()) . "\n\n";
                ob_flush();
                flush();
                usleep(10000000);
            }
        });

        $response->headers->set('Content-Type', 'text/event-stream');
        $response->headers->set('X-Accel-Buffering', 'no');
        $response->headers->set('Cach-Control', 'no-cache');
        return $response;
    }

    public function actualizarArticulo(Request $req){
        $id = $req->get('id');
        $precio = $req->get('precio');

        $articulo = Articulo::find($id);
        $articulo->Precio = $precio;

        $articulo->save();
    }

    public function crearArticulo(Request $req){
        $articulo = new Articulo();

        $articulo->Nombre = $req->get('Nombre');
        $articulo->Precio = $req->get('Precio');
        $articulo->Stock = $req->get('Stock');
        $articulo->Seccion = $req->get('Seccion');

        $articulo->save();

        return $articulo;
    }

}
