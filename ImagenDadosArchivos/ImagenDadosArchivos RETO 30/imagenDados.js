let puntos;
puntos = 0;

let lanzamientos;
lanzamientos = 5;

let juegoTerminado = false;

// funcion jugar
// llama a la funcion lanzarDado para obtener un numero aleatorio entre 1 y 6
// luego llama a la funcion mostrarCara pasandole el numero obtenido
jugar = function () {

    // si el juego ya termino, no permitir seguir jugando
    if (juegoTerminado) {
        return;
    }

    let resultado;
    resultado = lanzarDado();
    console.log(resultado);

    mostrarCara(resultado);
    modificarPuntos(resultado);

    // si gano, no debe seguir ejecutando el resto
    if (juegoTerminado) {
        return;
    }

    modificarLanzamientos();
};

modificarPuntos = function (numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos);

    // si el jugador obtiene mas de 20 puntos.
    // mostrar un mensaje "GANASTE!"
    if (puntos > 20) {
        finalizarJuego("GANASTE!");
    }
};

// no recibe parametros.
// resta 1 a la variuable lanzamiento, guarda el resultado en la misma variable.
// y muestra el valor actualizado en pantalla.
modificarLanzamientos = function () {

    lanzamientos = lanzamientos - 1;
    cambiarTexto("lblLanzamientos", lanzamientos);

    // si lanzamientos llega a 0.
    // mostrar en pantalla el mensaje "GAME OVER"
    // invoca a limpiar.
    if (lanzamientos == 0) {
        finalizarJuego("PERDISTE!");
    }
};

finalizarJuego = function (mensaje) {
    juegoTerminado = true;
    cambiarTexto("lblMensaje", mensaje);

    document.getElementById("btnJugar").disabled = true;

    document.getElementById("btnReiniciar").disabled = false;
};


reiniciarJuego = function () {
    limpiar();

    document.getElementById("btnJugar").disabled = false;
    document.getElementById("btnReiniciar").disabled = true;
};


limpiar = function () {
    // colocar puntaje en 0 y lanzamientos en 5
    // en las variables y en pantalla.
    // quitar la imagen "".
    puntos = 0;
    lanzamientos = 5;
    juegoTerminado = false;

    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarImagen("imgDado", "");
    cambiarTexto("lblMensaje", "");
};

// funcion mostrarCara recibe el numero que quiera mostrar.
// muestra la imagen correspondiente al numero del dado que recibe.
mostrarCara = function (numero) {

    if (numero == 1) { // con == comparamos valores , mientras con = asignamos valores
        cambiarImagen("imgDado", "dados1.png");
    }
    else if (numero == 2) {
        cambiarImagen("imgDado", "dados2.png");
    }
    else if (numero == 3) {
        cambiarImagen("imgDado", "dados3.png");
    }
    else if (numero == 4) {
        cambiarImagen("imgDado", "dados4.png");
    }
    else if (numero == 5) {
        cambiarImagen("imgDado", "dados5.png");
    }
    else if (numero == 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
};

lanzarDado = function () {
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;

    aleatorio = Math.random();
    aleatorioMultiplicado = aleatorio * 6;
    aleatorioEntero = parseInt(aleatorioMultiplicado);
    valorDado = aleatorioEntero + 1;

    return valorDado;
};
