<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\ArticulosController::class, 'todosLosArticulos']);

Route::get('/articulo/{id}', [\App\Http\Controllers\ArticulosController::class, 'verArticulo']);

Route::post('/actualizar', [\App\Http\Controllers\ArticulosController::class, 'actualizarArticulo']);

Route::post('/crear', [\App\Http\Controllers\ArticulosController::class, 'crearArticulo']);

Route::post('/borrar', [\App\Http\Controllers\ArticulosController::class, 'borrarArticulo']);
