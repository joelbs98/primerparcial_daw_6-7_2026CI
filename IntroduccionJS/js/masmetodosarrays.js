//arreglo plano
const meses = new Array("Enero", "Febrero", "Marzo");

//arreglos de objetos
const carrito = [
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Mouse", precio: 500 },
];
//forEach para recorrer
meses.forEach(function (mes) {
  console.log(mes);
});
//forEach para buscar elementos
meses.forEach(function (mes) {
  if (mes == "Abril") {
    console.log("Si existe Febrero");
  }
});
//includes para buscar en arreglos planos
let resultado = meses.includes("Marzo");
console.log(resultado);

//Some ideal para buscar en arreglos de objetos
resultado = carrito.some(function (producto) {
  return producto.nombre === "Mouse";
});
console.log(resultado);
