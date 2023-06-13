const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S','Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let NombreError = EmailError = TelfError = dninieError = GRPDError = true; 

function iniciar(){
    document.formulario.nombre.value= localStorage.getItem('Nombreform');
    document.formulario.email.value= localStorage.getItem('Emailform');
    document.formulario.dninie.value= localStorage.getItem('DniNieform');
    document.formulario.telf.value= localStorage.getItem('Telfform');
}

function mostrarError (id,txt){
    document.getElementById(id).innerHTML=txt;
}

function validarNombre (){
    var nombre= document.formulario.nombre.value;
    if (nombre === ""){
        mostrarError("errorNombre","ERROR:Campo vacio");
    }
    else {
        mostrarError("errorNombre","");
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false){
            mostrarError("errorNombre","ERROR: Formato inválido");
        }
        else {
            mostrarError("errorNombre","");
            NombreError = false;
            localStorage.setItem("Nombreform", nombre);
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
            EmailError = false;
            localStorage.setItem("Emailform", email);
        }
    }
}

function validarDniNie (){
    let DniNie = '';
    DniNie = document.formulario.dninie.value;
    var regex = /^[XYZ]?\d{8}[A-Z]$/;
        if (regex.test(DniNie) === false){
            mostrarError("errordninie","ERROR: Formato DNI/NIE inválido");
        }
        else {

            let letra = DniNie[DniNie.length-1];
            regex = /\d+/g;
            dni= parseInt(DniNie.match(regex));
            if (LETRAS[dni % 23] != letra){
                mostrarError("errordninie","ERROR:Letra no correcta");
            }
            else{
                mostrarError("errordninie","");
                DniNieError = false;
                localStorage.setItem("DniNieform", dninie);
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
            TelfError = false;
            localStorage.setItem("Telfform", telf);
        }
    }
}

// Pro form of doing it
// !regex.test(telf)?mostrarError("errorTelf,","ERROR:Formato telf invalido")

// esto simplemente devuelve un true o un false:
function validation(){
    if (!NombreError && !EmailError && !TelfError && !GRPDError){
        localStorage.clear();
        return true;
    } 
    else {
        validarNombre();
        validarEmail();
        validarDniNie();
        validarTelf();
        validarGRPD();
        return false;
    }
}

function validarGRPD(){
    let grpd= document.formulario.grpd.checked;
    if (grpd){
        mostrarError("errorGRPD","");
        GRPDError = false;
}
else{
    mostrarError("errorGRPD","");

}
}

window.addEventListener("load", iniciar);