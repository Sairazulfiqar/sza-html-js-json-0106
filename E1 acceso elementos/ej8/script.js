

function actualizarHora() {
    var spanElement = document.getElementById('hora');
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    spanElement.textContent = hora + ':' + minutos + ':' + segundos;
    }

    setInterval(actualizarHora, 1000);

