invertirCadena = function (cadena) {

    let resultado = "";


    for (let i = cadena.length - 1; i >= 0; i--) {
        let letra = cadena.charAt(i);
        resultado = resultado + letra;
    }

    return resultado;
}

ejecutarPrueba2 = function () {

    let texto = document.getElementById("txtCadena").value;

    let cadenaInvertida = invertirCadena(texto);


    document.getElementById("lblResultado").innerText = cadenaInvertida;
}
