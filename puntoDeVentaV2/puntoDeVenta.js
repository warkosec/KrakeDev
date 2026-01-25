esProductoValido = function (producto) {
    // obligatorio y máximo 10 caracteres
    if (producto == null) {
        return false;
    }
    if (producto.trim().length === 0) {
        return false;
    }
    if (producto.length > 10) {
        return false;
    }
    return true;
}

esCantidadValida = function (cantidadTexto) {
    // obligatorio, entero, 0 a 100
    if (cantidadTexto == null) {
        return false;
    }
    if (cantidadTexto.trim().length === 0) {
        return false;
    }

    let cantidad = parseInt(cantidadTexto);

    // valida que sea número y que sea entero real (ej: "10" ok, "10.5" no)
    if (isNaN(cantidad)) {
        return false;
    }
    if (cantidadTexto.includes(".")) {
        return false;
    }

    return cantidad >= 0 && cantidad <= 100;
}

esPrecioValido = function (precioTexto) {
    // obligatorio, número, 0 a 50
    if (precioTexto == null) {
        return false;
    }
    if (precioTexto.trim().length === 0) {
        return false;
    }

    let precio = parseFloat(precioTexto);
    if (isNaN(precio)) {
        return false;
    }

    return precio >= 0 && precio <= 50;
}

calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    // Recuperar textos primero (para validación)
    let productoTexto = recuperarTexto("txtProducto");
    let cantidadTexto = recuperarTexto("txtCantidad");
    let precioTexto = recuperarTexto("txtPrecio");

    // VALIDACIONES 
    if (productoTexto.trim().length === 0 || cantidadTexto.trim().length === 0 || precioTexto.trim().length === 0) {
        mostrarTexto("lblMensaje", "CAMPO OBLIGATORIO");
        return;
    }

    if (!esProductoValido(productoTexto)) {
        mostrarTexto("lblMensaje", "Producto inválido (máx 10 caracteres)");
        return;
    }

    if (!esCantidadValida(cantidadTexto)) {
        mostrarTexto("lblMensaje", "Cantidad inválida (entero 0 a 100)");
        return;
    }

    if (!esPrecioValido(precioTexto)) {
        mostrarTexto("lblMensaje", "Precio inválido (0 a 50)");
        return;
    }

    // Si todo es válido, recién recupero con tus funciones
    nombreProducto = productoTexto;
    precioProducto = recuperarFloat("txtPrecio");
    cantidad = recuperarInt("txtCantidad");

    // Limpio mensaje de error
    mostrarTexto("lblMensaje", "");

    //1) Subtotal
    valorSubtotal = calcularSubtotal(precioProducto, cantidad);
    mostrarTexto("lblSubtotal", valorSubtotal.toFixed(2));

    //2) Descuento por VOLUMEN (monto)
    valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
    mostrarTexto("lblDescuento", valorDescuento.toFixed(2));

    //3) IVA sobre (subtotal - descuento)
    valorIVA = calcularIVA(valorSubtotal - valorDescuento);
    mostrarTexto("lblValorIVA", valorIVA.toFixed(3));

    //4) Total
    valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
    mostrarTexto("lblTotal", valorTotal.toFixed(3));

    //5) Resumen
    let resumen = "Valor a pagar por " + cantidad + " " + nombreProducto +
        " (descuento por volumen): USD " + valorTotal.toFixed(2);

    mostrarTexto("lblResumen", resumen);
}

limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
     */
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "0.0");
    mostrarTextoEnCaja("txtCantidad", "0");

    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");
    mostrarTexto("lblResumen", "");
    mostrarTexto("lblMensaje", "");
}

