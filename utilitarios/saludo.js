saludar=function(){
    //recuperar el valor de la caja de texto txtNopmbre
    let nombre = recuperarTexto('txtNombre');
    //recuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto('txtApellido');
    let edad = recuperarInt('txtEdad');
    let estatura = recuperarFloat('txtEstatura');


}
recuperarTexto = function(idComponente){
    let componente;
    let valorIngresador;
    componente = document.getElementById(idComponente);
    valorIngresador = componente.value;
    return valorIngresador;
}
recuperarInt = function(idComponente){
        let valorCaja=recuperarTexto(idComponente);
        let valorEntero=parseInt(valorCaja);
        return valorEntero;
}
recuperarFloat = function(idComponente){
    let valorCaja=recuperarTexto(idComponente);
    let valorFloat=parseFloat(valorCaja);
    return valorFloat;
}
