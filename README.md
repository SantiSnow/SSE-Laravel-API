
# SSE API Laravel

Este software esta creado en Laravel, se trata de una API REST que consulta una base de datos de artículos, y se encarga de retornar constantemente sus datos, mediante el componente Server Sent Events. Esto permite que el cliente consuma constantemente sus datos, y que su sitio se actualize en caso de cambios a la base de datos.

Esto es útil para empresas o negocios que deseen ver en tiempo real el contenido de su base de datos sin necesidad de refrescar su página o realizar consultas.

## Sobre el proyecto

La API retorna los datos en formato JSON, y los actualiza cada diez segundos. Para cambiar el tiempo de respuesta solo necesitas cambiar el parametro dentro del controllador ArticulosController:

~~~

    echo 'data: ' . json_encode(Articulo::all()) . "\n\n";

                ob_flush();
                
                flush();
                
                usleep(10000000); //este parametro esta en nanosegundos/microsegundos

~~~

En cuanto a como consumirlo en el Front-End, en la carpeta con dicho nombre se encuentra todo el código, dado que la idea de esto es crear una API que pueda consumirse desde el exterior, desde cualquier otro programa y no una aplicación en la Laravel completa, se adjunta el código del cliente en HTML, CSS y JavaScript

En el Front-End se creo una IU bastante sencilla con Materialize, para permitir ver los productos en tiempo real y ver que se actualizen SOLO si hay cambios en los datos. La aplicación muestra todos los datos la primera vez, y solo los cambia si se han modificado en la Base de Datos.
También se creo un pequeño formulario con Materialize para permitir actualizar los datos facilmente.

Como siempre acostumbro, debajo estan los datos sobre Laravel.

## Dependencias y demás

-Laravel

-MySQL

-JQuery

-Materialize

-Material Design

-SSE en el cliente

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
