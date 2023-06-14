let NombreError = TelfError = document.formulario.nombre.value = true;

function iniciar(){
    document.formulario.nombre.value= localStorage.getItem('Nombreform');
    document.formulario.telf.value= localStorage.getItem('Telfform');
}
function mostrarError (id,txt){
    document.getElementById(id).innerHTML=txt;
}

function validarNombre(){
    var nombre = document.formulario.nombre.value;
    if (nombre === ""){
        document.getElementById("errornombre").innerHTML="ERROR: nombre vacio";
    }
    else {
        document.getElementById("errornombre").innerHTML="";
        NombreError = false;
        localStorage.setItem("Nombreform", nombre);
    }
}

function validarTelf (){
    var telf= document.formulario.telf.value;
    if (telf === ""){
        document.getElementById("errortelf").innerHTML="ERROR: telf vacio";
    }
    else {
        document.getElementById("errortelf").innerHTML="";
        TelfError = false;
        localStorage.setItem("Telfform", telf);
    }
}

function validation(){
    if (!NombreError && !TelfError){
        localStorage.clear();
        return true;
    } 
    else {
        validarNombre();
        validarTelf();
        return false;
    }
}


window.addEventListener("load", iniciar);