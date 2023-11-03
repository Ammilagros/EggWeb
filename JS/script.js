//alert("Hola este es mi Javascript");
//let nombre = "Milagros";
//alert(nombre);


//(window.onload = function() {
    //const acercaDe = document.getElementById("tarjeta_presentacion");
    //const titulo_AcercaDe = document.getElementById("titulo_tarjeta");

   // if (titulo_AcercaDe != acercaDe) {
       // titulo_AcercaDe.innerHTML = "Acerca De";}
//}

//Funciones
let presentacion = "Acerca De";
let titulo       = document.getElementById("titulo_tarjeta_presentacion");

function cambiarTitulo(presentacion){
    let contenido = `${presentacion}`;
    return contenido;
}

titulo.innerHTML = cambiarTitulo(presentacion);