calcularTasaInteres = function (ingresoAnual) {
    if (ingresoAnual < 300000) {
        return 16;
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        return 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        return 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        return 13;
    } else {
        return 12;
    }
};

calcularCapacidadPago = function (edad, ingresos, egresos) {
    let sobrante = ingresos - egresos;
    if (sobrante < 0) {
        sobrante = 0;
    }

    if (edad > 50) {
        return sobrante * 0.30;
    } else {
        return sobrante * 0.40;
    }
};

calcularDescuento = function (precio, cantidad) {
    let total = precio * cantidad;
    let porcentaje = 0;

    if (cantidad < 3) {
        porcentaje = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        porcentaje = 0.02;
    } else if (cantidad >= 6 && cantidad <= 11) {
        porcentaje = 0.03;
    } else {
        porcentaje = 0.04;
    }

    return total - (total * porcentaje);
};

determinarColesterolLDL = function (nivelColesterol) {

    if (nivelColesterol < 100) {
        return "Óptimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Límite alto";
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Alto";
    } else {
        return "Muy alto";
    }
};

validarClave = function (clave) {
    if (clave == null) {
        return false;
    }
    let longitud = clave.length;
    return longitud >= 8 && longitud <= 16;
};

esMayuscula = function (caracter) {
    if (caracter == null || caracter.length === 0) {
        return false;
    }
    let codigo = caracter.charCodeAt(0);
    return codigo >= 65 && codigo <= 90;
};

esMinuscula = function (caracter) {
    if (caracter == null || caracter.length === 0) {
        return false;
    }
    let c = caracter.charAt(0);
    let codigo = c.charCodeAt(0);


    if (codigo >= 97 && codigo <= 122) {
        return true;
    }


    return c === "á" || c === "é" || c === "í" || c === "ó" || c === "ú" || c === "ñ" || c === "ü";
};

esDigito = function (caracter) {
    if (caracter == null || caracter.length === 0) {
        return false;
    }
    let codigo = caracter.charCodeAt(0);
    return codigo >= 48 && codigo <= 57; 
};

darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    return (notaMatematica > 90) || (notaFisica > 90) || (notaGeometria > 90);
};

otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    return ((notaMatematica > 90) || (notaFisica > 90)) && (notaGeometria > 80);
};

dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    return ((notaMatematica > 90) || (notaFisica > 90) || (notaGeometria > 90)) && (notaFisica > notaMatematica);
};
