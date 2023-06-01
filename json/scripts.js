fetch('data.json')
.then (response => response.json())
.then (respuesta =>{
    let elemento = document.getElementById("container");
    let codigo_HTML = "";
    codigo_HTML = "<h1>"+respuesta.nombre+"<h1>";
    codigo_HTML += "<h2>"+respuesta.email+"<h2>";
    codigo_HTML +="<ul>";
    respuesta.work.array.forEach(element => {
        codigo_HTML += "<li>"+element.empresa+"-"+element.ubicación+"<li>"
    });
    codigo_HTML = "</ul>"
    elemento.innerHTML = codigo_HTML; 
})
.catch(error => {
    console.error("Error al cargar el archivo:", error);
})