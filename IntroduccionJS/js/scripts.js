console.log("Funciona");

//query selector -> retornar ninguno o hasta un elemento que concuerde
//con el selector

const footer = document.querySelector(".footer");
console.log(footer);

footer.textContent = "Nuevo pie de página";
footer.classList.add("nueva-clase");

//querySelectorAll -> retorna desde ninguno o todos los elementos que concuerden
//con el selector
const lenguajes = document.querySelectorAll(".lenguaje");
console.log(lenguajes);
console.log(lenguajes[0]);

const enlaces = document.querySelectorAll(".navegacion-principal a");
console.log(enlaces);
console.log(enlaces[0]);
enlaces[0].textContent = "Angular";
enlaces[0].href = "https://angular.dev/";
enlaces[0].classList.add("nueva-clase");
enlaces[0].classList.add("nueva-clase2");
console.log(enlaces[0]);
enlaces[0].classList.remove("nueva-clase");

//getElementById
const title = document.getElementById("title");
console.log(title);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A"); //se recomienda poner entre
//mayusculas la etiqueta a crear
//AGREGAR EL HREF
nuevoEnlace.href = "https://es.react.dev/";
//agregar el texto
nuevoEnlace.textContent = "React";
//agregar la clase
nuevoEnlace.classList.add("navegacion-principal");
//AGREGAMOS AL DOCUMENTO
const navegacion = document.querySelector(".navegacion-principal");
navegacion.appendChild(nuevoEnlace);

//Eventos
//Window es global, document esta dentro de window
console.log(1);
window.addEventListener("load", function () {
  console.log(2);
});
//añado un listener y cuando el listener se ejecuta se realiza la funcion
//load -> espera a que el JS y los archivos que dependen del html esten listos
document.addEventListener("DOMContentLoaded", imprimir);
//DOMContentLoaded -> espera a que se descargue el HTML -> SE UTILIZA MAS ESTE

function imprimir() {
  console.log(6);
}

window.onscroll = function () {
  console.log("Scrolling");
};

//Seleccionar el/los elementos y asociarlos a un evento
const btnContactar = document.querySelector(".boton-contactar");
btnContactar.addEventListener("click", function (evento) {
  console.log(evento);
});
/*
//Seleccionar el/los elementos y asociarlos a un evento
const btnFormulario = document.querySelector(".boton-formulario");
btnFormulario.addEventListener("click", function (evento) {
  console.log(evento);
  evento.preventDefault();

  console.log("Enviando formulario");
});
*/
//Eventos de los inputs y Textarea
const nombre = document.querySelector(".nombre");
const email = document.querySelector(".email");
const mensaje = document.querySelector(".mensaje");
const telefono = document.querySelector(".telefono");

nombre.addEventListener("change", function () {
  //change se activa cuando dejo de escribir y salgo del input
  console.log("escribiendo");
});

nombre.addEventListener("input", function (e) {
  //input se activa con cada tecla
  console.log("Escribiendo en tiempo real");
  console.log(e.data); //imprimo el caracter que se esta escribiendo
  console.log(e.target.value); //imprimo el valor completo
});

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
telefono.addEventListener("input", leerTexto);
function leerTexto(e) {
  datos[e.target.id] = e.target.value;
  console.log(datos);
}
const datos = {
  nombre: "",
  email: "",
  mensaje: "",
  telefono: "",
};

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  //Validar el formulario
  const { nombre, email, mensaje, telefono } = datos; //destructuring
  console.log(telefono);
  if (nombre === "" || email === "" || mensaje === "" || telefono === "") {
    console.log("Todos los campos son obligatorios");
    mostrarError("Todos los campos son obligatorios");
    return; //return corta la ejecución del codigo
  }
  //Enviar el formulario
  console.log("Enviando formulario");
  mostrarOK("Formulario enviado correctamente");
});

function mostrarError(mensaje) {
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");
  formulario.appendChild(error);

  setTimeout(() => {
    error.remove();
  }, 5000);
}

function mostrarOK(mensaje) {
  const correcto = document.createElement("P");
  correcto.textContent = mensaje;
  correcto.classList.add("correcto");
  formulario.appendChild(correcto);

  setTimeout(() => {
    correcto.remove();
  }, 5000);
}
