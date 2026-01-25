
obtenerAleatorio = function () {

    return Math.floor(Math.random() * 3) + 1;
}

generarElemento = function () {

    let numero = obtenerAleatorio();

    if (numero === 1) {
        return "piedra";
    } else if (numero === 2) {
        return "papel";
    } else {
        return "tijera";
    }
}

determinarGanador = function (eleccionJugador1, eleccionJugador2) {

    if (eleccionJugador1 === eleccionJugador2) {
        return 0;
    }

    if (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") {
        return 1;
    }
    if (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") {
        return 1;
    }
    if (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel") {
        return 1;
    }

    return 2;
}

generarRuta = function (nombre) {

    return "./imagenes/" + nombre + ".png";
}
