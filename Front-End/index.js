


if (typeof (EventSource) !== "undefined") {
    var source = new EventSource("http://laravel.test/");
    var vuelta = 0;
    source.onmessage = (event) => {
        const datosObtenidos = JSON.parse(event.data);

        const cantProd = datosObtenidos.length;

        for (i in datosObtenidos) {
            if(vuelta < cantProd){
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

            if(precioActual != precioNuevo){
                console.log("El precio ha cambiado");
                $("#mensaje").html("<br /><div class='card-panel teal lighten-2'>Ha habido cambios en los precios de los productos.</div>");

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
