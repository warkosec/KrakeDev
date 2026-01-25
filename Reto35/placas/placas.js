validarPlaca = function () {
    let placa = document.getElementById("txtPlaca").value;

    // limpiar textos
    document.getElementById("lblResultado").innerText = "";
    document.getElementById("lblErrores").innerText = "";
    document.getElementById("lblProvincia").innerText = "";
    document.getElementById("lblTipo").innerText = "";
    document.getElementById("lblPicoPlaca").innerText = "";

    let erroresEstructura = validarEstructura(placa);

    if (erroresEstructura == null) {
        document.getElementById("lblResultado").innerText = "ESTRUCTURA VALIDA";

        let provincia = obtenerProvincia(placa);
        document.getElementById("lblProvincia").innerText =
            provincia != null ? provincia : "Provincia incorrecta";

        let tipo = obtenerTipoVehiculo(placa);
        document.getElementById("lblTipo").innerText =
            tipo != null ? tipo : "Tipo de vehículo incorrecto";

        let dia = obtenerDiaPicoYPlaca(placa);
        document.getElementById("lblPicoPlaca").innerText =
            dia != null ? dia : "No se pudo determinar";
    } else {
        document.getElementById("lblResultado").innerText = "ESTRUCTURA INCORRECTA";
        document.getElementById("lblErrores").innerText = erroresEstructura;
    }
}

limpiar = function () {
    document.getElementById("txtPlaca").value = "";
    document.getElementById("lblResultado").innerText = "";
    document.getElementById("lblErrores").innerText = "";
    document.getElementById("lblProvincia").innerText = "";
    document.getElementById("lblTipo").innerText = "";
    document.getElementById("lblPicoPlaca").innerText = "";
}
