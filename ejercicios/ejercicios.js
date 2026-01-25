
mostrarImpares = function () {
    console.log("Antes for");

    for (let i = 1; i <= 21; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }

    console.log("Despues for");
}
