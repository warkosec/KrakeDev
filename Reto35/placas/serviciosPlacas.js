validarEstructura = function (placa) {
    let errores = "";

    if (placa == null) {
        return "La placa es obligatoria";
    }

    placa = placa.trim();

    // Longitud 7 u 8
    if (!(placa.length === 7 || placa.length === 8)) {
        errores += "La placa debe tener 7 u 8 caracteres. ";
        // si el largo es incorrecto, igual devolvemos este error (y evitamos acceder a posiciones que no existen)
        return errores.trim();
    }


    if (!esMayuscula(placa.charAt(0))) {
        errores += "El primer caracter debe ser una letra mayúscula. ";
    }
    if (!esMayuscula(placa.charAt(1))) {
        errores += "El segundo caracter debe ser una letra mayúscula. ";
    }
    if (!esMayuscula(placa.charAt(2))) {
        errores += "El tercer caracter debe ser una letra mayúscula. ";
    }

    // 4: guion
    if (!esGuion(placa.charAt(3))) {
        errores += "El cuarto caracter debe ser un guión. ";
    }

    // 5,6,7: dígitos
    if (!esDigito(placa.charAt(4))) {
        errores += "El quinto caracter debe ser un dígito. ";
    }
    if (!esDigito(placa.charAt(5))) {
        errores += "El sexto caracter debe ser un dígito. ";
    }
    if (!esDigito(placa.charAt(6))) {
        errores += "El séptimo caracter debe ser un dígito. ";
    }

    // 8: dígito (solo si existe)
    if (placa.length === 8) {
        if (!esDigito(placa.charAt(7))) {
            errores += "El octavo caracter debe ser un dígito. ";
        }
    }

    if (errores.length === 0) {
        return null;
    }
    return errores.trim();
}

obtenerProvincia = function (placa) {
    if (placa == null || placa.trim().length === 0) {
        return null;
    }

    let letra = placa.trim().toUpperCase().charAt(0);

    // Primera letra -> provincia
    // (Basado en tablas comunes de placas EC)
    let provincias = {
        "A": "Azuay",
        "B": "Bolívar",
        "C": "Carchi",
        "E": "Esmeraldas",
        "G": "Guayas",
        "H": "Chimborazo",
        "I": "Imbabura",
        "J": "Santo Domingo de los Tsáchilas",
        "K": "Sucumbíos",
        "L": "Loja",
        "M": "Manabí",
        "N": "Napo",
        "O": "El Oro",
        "P": "Pichincha",
        "Q": "Orellana",
        "R": "Los Ríos",
        "S": "Pastaza",
        "T": "Tungurahua",
        "U": "Cañar",
        "V": "Morona Santiago",
        "W": "Galápagos",
        "X": "Cotopaxi",
        "Y": "Santa Elena",
        "Z": "Zamora Chinchipe"
    };

    if (provincias[letra] != null) {
        return provincias[letra];
    }
    return null;
}

obtenerTipoVehiculo = function (placa) {
    if (placa == null || placa.trim().length < 2) {
        return null;
    }

    let segunda = placa.trim().toUpperCase().charAt(1);

    // Segunda letra -> tipo (según regla común)
    if (segunda === "A" || segunda === "U" || segunda === "Z") {
        return "Comercial (Taxi/Bus/Transporte)";
    }
    if (segunda === "E") {
        return "Gubernamental";
    }
    if (segunda === "X") {
        return "Uso oficial";
    }
    if (segunda === "M") {
        return "GAD (Municipal/Provincial)";
    }

    return "Particular (Privado)";
}

obtenerDiaPicoYPlaca = function (placa) {
    if (placa == null || placa.trim().length === 0) {
        return null;
    }

    let p = placa.trim();
    let ultimo = p.charAt(p.length - 1);

    if (!esDigito(ultimo)) {
        return null;
    }

    // Último dígito => día
    // Lunes: 1-2
    // Martes: 3-4
    // Miércoles: 5-6
    // Jueves: 7-8
    // Viernes: 9-0
    if (ultimo === "1" || ultimo === "2") return "Lunes";
    if (ultimo === "3" || ultimo === "4") return "Martes";
    if (ultimo === "5" || ultimo === "6") return "Miércoles";
    if (ultimo === "7" || ultimo === "8") return "Jueves";
    if (ultimo === "9" || ultimo === "0") return "Viernes";

    return null;
}
