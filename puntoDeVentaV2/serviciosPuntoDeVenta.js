calcularValorDescuento = function (monto, porcentajeDescuento) {
    return (monto * porcentajeDescuento) / 100;
}

calcularIVA = function (monto) {
    return monto * 0.12;
}

calcularSubtotal = function (precio, cantidad) {
    return precio * cantidad;
}

calcularTotal = function (subtotal, descuento, iva) {
    return subtotal - descuento + iva;
}

/*
    NUEVA FUNCIÓN (Reto: descuento por volumen)
    Retorna el MONTO de descuento, no porcentaje.
*/
calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let porcentaje = 0;

    if (cantidad < 3) {
        porcentaje = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        porcentaje = 0.03;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentaje = 0.04;
    } else {
        porcentaje = 0.05;
    }

    return subtotal * porcentaje;
}
