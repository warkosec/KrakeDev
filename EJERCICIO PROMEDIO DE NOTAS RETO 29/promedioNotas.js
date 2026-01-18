calcularPromedioNotas = function () {
    //Recuperar COMO FLOAT usando utilitarios.js
    let n1 = recuperarFlotante("txtNota1");
    let n2 = recuperarFlotante("txtNota2");
    let n3 = recuperarFlotante("txtNota3");


    //Invocar calcularPromedio y guardar en variable promedio
    let promedio = calcularPromedio(n1, n2, n3);

    //Mostrar con 2 decimales
    let promedio2Dec = promedio.toFixed(2);
    cambiarTexto("lblPromedio", promedio2Dec);

    //Mostrar gif según el promedio
    // Si promedio > 7 => éxito, caso contrario => fracaso
    if (promedio > 7) {
        cambiarImagen("imgResultado", "img/exito.png");
    } else {
        cambiarImagen("imgResultado", "img/fracaso.png");
    }
};
