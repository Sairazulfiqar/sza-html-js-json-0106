fetch('data.json')
.then (response => response.json())
.then (respuesta =>{
    let elemento = document.getElementById("container");
    let codigo_HTML = "";
    codigo_HTML = "<h1>"+respuesta.nombre+"<h1>";
    codigo_HTML += "<h2>"+respuesta.email+"<h2>";
    codigo_HTML +="<ul>";
    respuesta.works.forEach(element => {
        codigo_HTML += "<li>" +element.empresa+"-"+element.ubicacion+""+ "<br>" + element.f_start+"/"+ element.f_end+"</li>"
    });
    codigo_HTML += "</ul>"
    codigo_HTML += "<h3>"+respuesta.sofskills+"<h3>";
    elemento.innerHTML = codigo_HTML; 
})
.catch(error => {
    console.error("Error al cargar el archivo:", error);
})