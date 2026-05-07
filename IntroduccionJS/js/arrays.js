//Arreglos o arrays

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo"); //menos comun

const arreglo = [
  "Hola",
  true,
  20,
  { nombre: "Joel", apellido: "Barba" },
  [1, 2, 3],
];
console.table(arreglo);
console.log(arreglo[2]);

//conocer el tamaño del arreglo
console.log(numeros.length);

//iterar todo el array
numeros.forEach(function (numero) {
  console.log(numero);
});
