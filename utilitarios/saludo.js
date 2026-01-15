saludar=function(){
    //recuperar el valor de la caja de texto txtNopmbre
    let nombre = recuperarTexto('txtNombre');
    //recuperar el valor de la caja de texto txtApellido
    let apellido = recuperarTexto('txtApellido');
}
recuperarTexto = function(idComponente){
    let componente;
    let valorIngresador;
    componente = document.getElementById(idComponente);
    valorIngresador = componente.value;
    return valorIngresador;
}