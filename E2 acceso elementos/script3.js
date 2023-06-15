
let EmailError = true;

function iniciar() {
    document.formulario.email.value = localStorage.getItem('Emailform');
}

function mostrarError(id, txt) {
    document.getElementById(id).innerHTML = txt;
}

function validarEmail() {
    var email = document.formulario.email.value;
    if (email === "") {
        document.getElementById("erroremail").innerHTML = "ERROR: email vacio";
    }
    else {
        document.getElementById("erroremail").innerHTML = "";
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;
        if (regex.test(email) === false) {
            document.getElementById("erroremail").innerHTML = "ERROR: Formato email inválido";
        }
        else {
            document.getElementById("erroremail").innerHTML = "";
            EmailError = false;
            localStorage.setItem("Emailform", email);
        }
    }
}

function validation(){
if (!EmailError){
localStorage.clear();
return true;
} 
else {
validarEmail();
return false;
}
}