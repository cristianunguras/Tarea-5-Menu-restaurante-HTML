/**
 * Programación Funcional **************
 */

// ****************** VARIABLES *******************

// Pedido Actual
let pedido = []
let filas = 0; //variable para crear filas de la tabla del menu


// ****************** FUNCIONES *******************
// MOSTRAR MENÚ
const mostrarMenu = () => {
    const cuerpoTabla = document.querySelector("#cuerpoTabla");
    CARTA.forEach(plato => {
        filas++
        const tr = document.createElement("tr")
            // Creamos el <td> de Código
        let tdCodigo = document.createElement("td")
        tdCodigo.textContent = plato.cod;
        tdCodigo.setAttribute('id', `cod${filas}`)
        tr.appendChild(tdCodigo);
        // El td de Plato
        let tdPlato = document.createElement("td")
        tdPlato.textContent = plato.nombre;
        tdPlato.setAttribute('id', `nombre${filas}`)
        tr.appendChild(tdPlato);
        // El td del Precio
        let tdPrecio = document.createElement("td")
        tdPrecio.textContent = plato.precio
        tdPrecio.setAttribute('id', `precio${filas}`)
        tr.appendChild(tdPrecio)
            //Agregamos el <tr> al cuerpo de la tabla
        tr.setAttribute('id', `fila${filas}`)
        cuerpoTabla.appendChild(tr)
    })
}

// CLIENTE PUEDA PEDIR LA COMIDA
const pedirComida = cod => {
    const productoEncontrado = CARTA.find(producto => producto.cod === cod)
        // Insertar el pedido
    pedido.push(productoEncontrado)
}

// CALCULAR Y VER PEDIDO
const calcularPedido = () => {
    let suma = 0; //variable para sumar precio platos del pedido
    const h4 = document.createElement("h4");
    h4.textContent = `El pedido es:`
    body.appendChild(h4)
    const ul = document.createElement("ul");
    pedido.forEach(plato => { //recorremos el arreglo pedido
        let li = document.createElement("li");
        li.textContent = `${plato.cod} - ${plato.nombre} - ${plato.precio}€`
        ul.appendChild(li);
        suma = suma + plato.precio
    })
    body.appendChild(ul)
    const p = document.createElement("p");
    p.textContent = `El precio total es  de ${suma} euros.`
    body.appendChild(p)

}

// ****************************************************************
// INICIAR nuestra App
// Usuario la pueda consumir

//Definir el body
let body = document.querySelector('body')
body.style = 'background-color: grey'

//Definir el h1
let h1 = document.getElementById('titulo')
h1.style.color = 'red'
h1.style.textAlign = 'center'

//Definir la tabla
let table = document.querySelector('table')
table.style = 'margin: 0 auto'
table.style.color = 'yellow'
table.style.textAlign = 'center'

//Definir el h3
let h3 = document.querySelector('h3')
h3.style.color = 'blue'

mostrarMenu()

//Agrandar fila de la tabla cuando situamos el raton encima
for (i = 1; i <= filas; i++) {
    let fila = document.getElementById(`fila${i}`)
    fila.addEventListener('mouseenter', () => {
        fila.style.fontSize = '2.5rem'
    })
    fila.addEventListener('mouseleave', () => {
        fila.style.fontSize = '1rem'
    })
}

//Realizar pedido haciendo click sobre la fila
for (i = 1; i <= filas; i++) {
    let fila = document.getElementById(`fila${i}`)
    let plato = document.getElementById(`nombre${i}`)
    let cod = document.getElementById(`cod${i}`)
    fila.addEventListener('click', () => {
        pedirComida(cod.textContent)
        alert(`Producto ${plato.textContent.toUpperCase()} añadido`)
    })
}

//Boton terminar pedido
let boton = document.getElementById('submit')
boton.addEventListener('click', () => {
    calcularPedido()
})