//No se olvide de respirar, mantenga la calma y demuestre lo que sabe

// Variables globales
let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;


esMayuscula = function (caracter) {
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
};


mostrarLetra = function (letra, posicion) {
    if (posicion === 0) {
        mostrarTexto("div0", letra);
    } else if (posicion === 1) {
        mostrarTexto("div1", letra);
    } else if (posicion === 2) {
        mostrarTexto("div2", letra);
    } else if (posicion === 3) {
        mostrarTexto("div3", letra);
    } else if (posicion === 4) {
        mostrarTexto("div4", letra);
    }
};


mostrarAhorcado = function () {
    if (errores === 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    } else if (errores === 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png");
    } else if (errores === 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png");
    } else if (errores === 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png");
    } else if (errores === 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png");
    } else if (errores === 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png");
    } else if (errores === 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png");
    } else if (errores === 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png");
    } else if (errores === 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png");
    }
};


guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");

    if (palabra.length !== 5) {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
        return;
    }

    for (let i = 0; i < palabra.length; i++) {
        if (!esMayuscula(palabra.charAt(i))) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas");
            return;
        }
    }

    palabraSecreta = palabra;
    console.log(palabra);

    // Reiniciar variables (para poder jugar)
    intentos = 0;
    coincidencias = 0;
    errores = 0;

    // Limpiar letras mostradas
    mostrarTexto("div0", "");
    mostrarTexto("div1", "");
    mostrarTexto("div2", "");
    mostrarTexto("div3", "");
    mostrarTexto("div4", "");

    // Limpiar caja letra
    mostrarTextoEnCaja("txtLetra", "");

    // Limpiar imagen
    mostrarImagen("ahorcadoImagen", "");
};

validar = function (letra) {
    let letrasEncontradas = 0;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) === letra) {
            mostrarLetra(letra, i);
            letrasEncontradas = letrasEncontradas + 1;
        }
    }

    // si no encontró ninguna letra
    if (letrasEncontradas === 0) {
        alert("LA LETRA NO ES PARTE DE LA PALABRA");
        errores = errores + 1;
        mostrarAhorcado();
    } else {
        coincidencias = coincidencias + letrasEncontradas;
    }
};


ingresarLetra = function () {
    // contar intentos
    intentos = intentos + 1;

    let letra = recuperarTexto("txtLetra");

    // Validar que sea 1 caracter
    if (letra.length !== 1) {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        return;
    }

    // Validar mayúscula
    if (esMayuscula(letra)) {
        validar(letra);
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
        return;
    }

    // Limpiar caja
    mostrarTextoEnCaja("txtLetra", "");

    // ya tiene 5 coincidencias
    if (coincidencias === 5) {
        // cambiar alert por imagen ganador.gif
        mostrarImagen("ahorcadoImagen", "ganador.gif");
        return;
    }

    // Si ya tiene 10 intentos
    if (intentos === 10) {
        //cambiar alert por imagen gameOver.gif
        mostrarImagen("ahorcadoImagen", "gameOver.gif");
        return;
    }
};
