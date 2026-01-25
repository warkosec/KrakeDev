
let puntosUsuario = 0;
let puntosComputador = 0;
let juegoTerminado = false;

inicializar = function () {

    cambiarTexto("lblPuntosUsuario", puntosUsuario);
    cambiarTexto("lblPuntosComputador", puntosComputador);
    cambiarTexto("lblResultado", "");
    cambiarImagen("imgComputador", "");


    let btn = document.getElementById("btnNuevaPartida");
    if (btn) {
        btn.onclick = limpiar;
    }
}

jugar = function (seleccionado) {
    if (juegoTerminado) {
        return;
    }


    let eleccionComputador = generarElemento();


    let ruta = generarRuta(eleccionComputador);
    cambiarImagen("imgComputador", ruta);


    let resultado = determinarGanador(seleccionado, eleccionComputador);

    if (resultado === 0) {
        cambiarTexto("lblResultado", "EMPATE");
    } else if (resultado === 1) {
        cambiarTexto("lblResultado", "GANASTE LA PARTIDA!!");
        puntosUsuario = puntosUsuario + 1;
    } else {
        cambiarTexto("lblResultado", "PERDISTE LA PARTIDA");
        puntosComputador = puntosComputador + 1;
    }


    cambiarTexto("lblPuntosUsuario", puntosUsuario);
    cambiarTexto("lblPuntosComputador", puntosComputador);


    if (puntosUsuario === 5) {
        cambiarTexto("lblResultado", "HAS GANADO EL JUEGO");
        juegoTerminado = true;
    } else if (puntosComputador === 5) {
        cambiarTexto("lblResultado", "EL COMPUTADOR TE HA VENCIDO");
        juegoTerminado = true;
    }
}

limpiar = function () {

    puntosUsuario = 0;
    puntosComputador = 0;
    juegoTerminado = false;


    inicializar();
}
