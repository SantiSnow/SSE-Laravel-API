


if (typeof (EventSource) !== "undefined") {
    var source = new EventSource("http://laravel.test/");
    var vuelta = 0;
    source.onmessage = (event) => {
        const datosObtenidos = JSON.parse(event.data);

        for (i in datosObtenidos) {
            if(vuelta < 3){
                $("#articulos").append(`
                <div class="col s12 m3">
                    <h5 class="header">${datosObtenidos[i].Nombre}</h5>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>Producto de la sección: ${datosObtenidos[i].Seccion}.</p>
                            <p>Stock del producto: ${datosObtenidos[i].Stock}</p>
                            <span>ID del producto: </span><span>${datosObtenidos[i].id}</span>
                        </div>
                        <div class="card-action">
                            <span>Precio: $</span><span id="${datosObtenidos[i].id}">${datosObtenidos[i].Precio}</span>
                        </div>
                    </div>
                </div>
                `);
                vuelta++;
            }
            
            const precioActual = $("#" + datosObtenidos[i].id).text();
            const precioNuevo = datosObtenidos[i].Precio;
            
            console.log("El precio actual del producto es de " + precioActual);
            console.log("El nuevo precio es de " + datosObtenidos[i].Precio);

            if(precioActual != precioNuevo){
                console.log("El precio ha cambiado");
                $("#mensaje").html("<p>Ha habido cambios en los precios de los productos.</p>");

                $("#" + datosObtenidos[i].id).html(precioNuevo);
            }
            else{
                console.log("El precio se mantiene");
            }

            
        }
    }

    source.onerror = (event) => {
        $("#mensaje").html("<p>Parece que hubo un error en la conexión y el servidor no responde. Intente refrescar el sitio o contactar con el soporte.</p>");
    }

} else {
    console.log("Sorry! No server-sent events supported in this browser!");
}
