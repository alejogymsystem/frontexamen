const url = 'https://backendexamen.onrender.com/producto'
const url2 = 'https://www.datos.gov.co/resource/mcec-87by.json'

const listarProductos = async() => {
    //Objeto del html donde se deslegará la información
    fetch(url2, {    
        method: 'GET',
        mode: 'cors',       
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaDolar = data //msg es el nombre de la lista retorna con json
        console.log(listaDolar)
        listaDolar.map(function (dolar) {
            //Configurar el objeto para enviarlo por url
            objetoDolar = Object.keys(dolar).map(key => key + '=' + 
            encodeURIComponent(dolar[key])).join('&');
            console.log(dolar)
        
    

    let objectId = document.getElementById('contenido') 
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {        
        method: 'GET',
        mode: 'cors',       
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    .then((res) => res.json())//Obtener respuesta de la petición
    .then(function(data){//Se manipulan los datos obtenidos de la url
        let listaProductos = data.msg //msg es el nombre de la lista retorna con json
        console.log(listaProductos)
        listaProductos.map(function (producto) {
            //Configurar el objeto para enviarlo por url
            objetoProducto = Object.keys(producto).map(key => key + '=' + 
            encodeURIComponent(producto[key])).join('&');
            console.log(producto)
            contenido = contenido + `<tr>`+
            `<td>`+producto.nombreProducto+`</td>`+
            `<td>`+producto.precioProducto+`</td>`+
            `<td>`+producto.ivaProducto+`</td>`+
            `<td>`+producto.Existencias+`</td>`+
            `<td>`+producto.preciodolar+`</td>`+
            `<td>`+listaDolar[0].valor+`</td>`+
            `<td><button onclick="redireccionarEditar('${objetoProducto}')">Editar</button></td>`+
            `</tr>`
        })
        objectId.innerHTML = contenido
       
        
    })
})
})

    /*for(i = 1; i<10; i++){
        contenido = contenido + '<tr>'+
        '<td>nombre</td>'+
        '<td>rol</td>'+
        '<td>estado</td>'
    }
    */

}


const registrarProducto= () => {

        

    console.log(listaDolar[0].valor)
const nombreProducto = document.getElementById('nombreProducto').value;
const precioProducto = document.getElementById('precioProducto').value
const ivaProducto = document.getElementById('ivaProducto').value
const Existencias = document.getElementById('Existencias').value
const preciodolar = document.getElementById('preciodolar').value


if(nombreProducto.length == 0){
    document.getElementById('nombreProductoHelp').innerHTML = 'Dato requerido'

}
else if(precioProducto.length == 0){
    document.getElementById('precioProductoHelp').innerHTML = 'Dato requerido'
}                                                                   
else if(ivaProducto.length == 0){
    document.getElementById('ivaProductoHelp').innerHTML = 'Dato requerido'
}
else if(Existencias.length == 0){
    document.getElementById('ExistenciasHelp').innerHTML = 'Dato requerido'
}
else if(preciodolar.length == 0){
    document.getElementById('preciodolarHelp').innerHTML = 'Dato requerido'
}
else{   
    let producto = {
        nombreProducto: nombreProducto,
        precioProducto: precioProducto,
        ivaProducto: ivaProducto,
        Existencias: Existencias,
        preciodolar: preciodolar
    }
    
    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(producto),//Convertir el objeto a JSON
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then((res) => res.json())//Obtener respuesta de la petición
    .then(json => {
        alert(json.msg) //Imprimir el mensaje de la transacción
        
    })
    
    
    }
}

const actualizarProducto= () => {
    const nombreProducto = document.getElementById('nombreProducto').value;
    const precioProducto = document.getElementById('precioProducto').value
    const ivaProducto = document.getElementById('ivaProducto').value
    const Existencias = document.getElementById('Existencias').value
    const preciodolar = document.getElementById('preciodolar').value

    if(nombreProducto.length == 0){
        document.getElementById('nombreProductoHelp').innerHTML = 'Dato requerido'

    }
    else if(precioProducto.length == 0){
        document.getElementById('precioProductoHelp').innerHTML = 'Dato requerido'
    }                                                                   
    else if(ivaProducto.length == 0){
        document.getElementById('ivaProductoHelp').innerHTML = 'Dato requerido'
    }
    else if(Existencias.length == 0){
        document.getElementById('ExistenciasHelp').innerHTML = 'Dato requerido'
    }
    else if(preciodolar.length == 0){
        document.getElementById('preciodolarHelp').innerHTML = 'Dato requerido'
    }
    else{
        let producto = {
            nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            ivaProducto: ivaProducto,
            Existencias: Existencias,
            preciodolar: preciodolar
        }
        
        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(producto),//Convertir el objeto a JSON
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(json => {
            alert(json.msg) //Imprimir el mensaje de la transacción
        })
        }
}

const redireccionarEditar = (objetoProducto) => {
    document.location.href='editarProducto.html?Producto='+objetoProducto
}

const editarProducto = () => {
    // Obtener datos de la url
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('nombreProducto').value = urlParams.get('nombreProducto')
    document.getElementById('precioProducto').value = urlParams.get('precioProducto')
    document.getElementById('ivaProducto').value = urlParams.get('ivaProducto')
    document.getElementById('Existencias').value = urlParams.get('Existencias')
    document.getElementById('preciodolar').value = urlParams.get('preciodolar')
}

if(document.querySelector('#btnRegistrar')){ //Si objeto exitste
document.querySelector('#btnRegistrar')
.addEventListener('click', registrarProducto)
}

if(document.querySelector('#btnActualizar')){//Si objeto existe
document.querySelector('#btnActualizar')
.addEventListener('click', actualizarProducto)
}
