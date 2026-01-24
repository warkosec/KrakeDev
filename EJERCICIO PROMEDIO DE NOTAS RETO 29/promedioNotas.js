calcularPromedioNotas = function () {
    // Recuperar notas como float
    let n1 = recuperarFlotante("txtNota1");
    let n2 = recuperarFlotante("txtNota2");
    let n3 = recuperarFlotante("txtNota3");

    // Calcular promedio
    let promedio = calcularPromedio(n1, n2, n3);

    // Mostrar promedio con 2 decimales
    cambiarTexto("lblPromedio", promedio.toFixed(2));

    // Evaluar condiciones según el ejercicio
    if (promedio > 0 && promedio < 5) {
        cambiarTexto("lblMensaje", "REPROBADO");
        cambiarImagen("imgResultado", "img/fracaso.png");
    }
    else if (promedio >= 5 && promedio <= 8) {
        cambiarTexto("lblMensaje", "BUEN TRABAJO");
        cambiarImagen("imgResultado", "img/exito.png");
    }
    else if (promedio > 8 && promedio <= 10) {
        cambiarTexto("lblMensaje", "EXCELENTE");
        cambiarImagen("imgResultado", "img/exito.png");
    }
    else {
        cambiarTexto("lblMensaje", "DATOS INCORRECTOS");
        cambiarImagen("imgResultado", "img/fracaso.png");
    }
};
