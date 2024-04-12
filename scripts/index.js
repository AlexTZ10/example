/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */
selector.innerHTML = "CONEXIÓN EXITOSA ENTRE HTML Y JS ...";

const nombre = prompt("Ingresa tu nombreeee: ");   /*  MUESTRA UNA VENTANA */

console.log("Nombre: " + nombre);

alert("Bienvenido " + nombre);


const frase = "Buenas Noches" ;

fraseMin = frase.toLowerCase();
fraseMay = frase.toUpperCase();

console.log(fraseMin);
console.log(fraseMay);
