

let elemento = document.getElementsByClassName('show');
elemento.addEventListener("click", ocultar)

function ocultar(){
    let cuadrado = document.getElementsByClassName("div")[0];
if (cuadrado.style.visibility == "hidden"){
    cuadrado.style.visibility = "visible";
}

else{
    cuadrado.style.visibility = "hidden";
}
}