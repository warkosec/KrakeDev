jugar=function(){
    let aleatorio;
    aleatorio = lanzarDado();
    cambiarTexto('lblNumero', aleatorio);

    if(aleatorio > 3){
        cambiarTexto('lblResultado', ' GANASTE');
    }else{
        cambiarTexto('lblResultado', ' PERDISTE');
    }
}


//Crear una funcion llamada lanzar dado
//No recibe parametros
// Retorna un numero aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    aleatorio=Math.random(); //entre 0 y 1
    numeroMultiplicado=aleatorio*6; //
    //console.log(numeroMultiplicado);
    numeroEntero = parseInt(numeroMultiplicado);
    //console.log("----->" + numeroEntero);
    valorDado=numeroEntero+1;
    //console.log("----->" + valorDado);
    return valorDado;

}