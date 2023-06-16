let NombreError = EmailError = TelfError = dninieError = true; 

function iniciar(){
    document.formulario.nombre.value= localStorage.getItem('Nombreform');
    document.formulario.email.value= localStorage.getItem('Emailform');
    document.formulario.dninie.value= localStorage.getItem('DniNieform');
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

    function validation(){
        if (!NombreError && !EmailError && !TelfError && !GRPDError){
            localStorage.clear();
            return true;
        } 
        else {
            validarNombre();
            validarEmail();
            validarDniNie();
            return false;
        }
    }