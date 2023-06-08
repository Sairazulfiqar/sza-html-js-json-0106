let NombreError = EmailError = TelfError = true; 

function mostrarError (id,txt){
    document.getElementById(id).innerHTML = txt;
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

function validarDniNie (){
    let DniNie = '';
    DniNie = document.formulario.dninie.value;
    var regex = /^[XYZ]?\d{8}[A-Z]$/;
        if (regex.test(DniNie) === false){
            mostrarError("errorDniNie","ERROR: Formato DNI/NIE inválido");
        }
        else {
            mostrarError("errordninie","");
            dninieError = false;
            let letra = DniNie[]
            regex = /\d+/g;
            dni= parseInt(DniNie.match(regex));
            console.log(dni)

            let letraUser = DniNie[DniNie.lenght-1];
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
    if (!NombreError && !EmailError && !TelfError && !GRPDError) return true;
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
    console.log(grpd);
    if (grpd){
        mostrarError("errorGRPD","");
        GRPDError = false;
}
}