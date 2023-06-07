

fetch('data.json')
.then (response => response.json())
.then (respuesta =>{

    let header = document.createElement('header');
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    header.appendChild(nombre);

    table.appendChild(thead);
    table.appendChild(tbody);

    document.body.appendChild(table);
    // Esto también se puede poner como = document.body.appendChild(table);

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');

    row_1.appendChild(heading_1);
    thead.appendChild(row_1);

    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2.appendChild(row_2_data_1);

})