validarPassword = function (password) {
    let errores = "";

    // 1) Longitud mínima 8
    if (password.length < 8) {
        errores += "Error: La contraseña debe tener mínimo 8 caracteres.\n";
    }

    // 2) Longitud máxima 16
    if (password.length > 16) {
        errores += "Error: La contraseña debe tener máximo 16 caracteres.\n";
    }

    // 3) Al menos una letra mayúscula
    let tieneMayuscula = false;
    // 4) Al menos un dígito
    let tieneDigito = false;
    // 5) Al menos un caracter especial: *, - o _
    let tieneEspecial = false;

    for (let i = 0; i < password.length; i++) {
        const c = password.charAt(i);

        if (c >= "A" && c <= "Z") {
            tieneMayuscula = true;
        }

        if (c >= "0" && c <= "9") {
            tieneDigito = true;
        }

        if (c === "*" || c === "-" || c === "_") {
            tieneEspecial = true;
        }
    }

    if (!tieneMayuscula) {
        errores += "Error: La contraseña debe tener al menos una letra mayúscula.\n";
    }

    if (!tieneDigito) {
        errores += "Error: La contraseña debe tener al menos un dígito.\n";
    }

    if (!tieneEspecial) {
        errores += "Error: La contraseña debe tener al menos un caracter especial (*, - o _).\n";
    }

    // Retorna cadena vacía si está todo correcto, o el mensaje con errores
    return errores;
};


ejecutarValidacion = function () {
    // Recuperar la caja de texto de la página
    const txt = document.getElementById("txtPassword");
    const lbl = document.getElementById("lblResultado");

    const password = txt.value;

    // Invocar a validarPassword
    const errores = validarPassword(password);

    // Si el retorno es cadena vacía, Password Correcto; caso contrario mostrar errores
    if (errores.length === 0) {
        lbl.textContent = "Password Correcto";
    } else {
        lbl.textContent = errores;
    }
};
