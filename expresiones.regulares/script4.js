let NombreError = EmailError = TelfError = true; 

function mostrarError (id,txt){
    document.getElementById(id).innerHTML = txt;
}

function validarNombre (){
    var nombre= document.formulario.nombre.value;
    if (nombre === ""){
        document.getElementById("errorNombre").innerHTML="ERROR: Campo vacio"
    }
    else {
        document.getElementById("errorNombre").innerHTML=""
        var regex = /^[a-zA-Z\s]+$/
        if (regex.test(nombre) === false){
            document.getElementById("errorNombre").innerHTML="ERROR: Formato inválido";
        }
        else {
            document.getElementById("errorNombre").innerHTML="";
        }
    }
}

function validarEmail (){
    var email= document.formulario.email.value;
    if (email === ""){
        document.getElementById("erroremail").innerHTML="ERROR: email vacio";
    }
    else {
        document.getElementById("erroremail").innerHTML="";
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
        if (regex.test(email) === false){
            document.getElementById("erroremail").innerHTML="ERROR: Formato email inválido";
        }
        else {
            document.getElementById("erroremail").innerHTML="";
        }
    }
}

function validarTelf (){
    var telf= document.formulario.telf.value;
    if (email === ""){
        document.getElementById("errortelf").innerHTML="ERROR: telf vacio";
    }
    else {
        document.getElementById("errortelf").innerHTML=""
        var regex = /^[6789]\d{8}/;
        if (regex.test(telf) === false){
            document.getElementById("errortelf").innerHTML="ERROR: Formato telf inválido";
        }
        else {
            document.getElementById("errortelf").innerHTML="";
        }
    }
}

// Pro form of doing it
// !regex.test(telf)?mostrarError("errorTelf,","ERROR:Formato telf invalido")

// esto simplemente devuelve un true o un false:
function validation(){
    if (!NombreError && !EmailError && !TelfError) return true;
    else return false; 
}
