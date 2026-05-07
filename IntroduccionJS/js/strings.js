/*
//Strings o cadenas de texto
const producto = "Monitor de 20 pulgadas"; //es la mas comun
const producto2 = String("Monitor de 30 pulgadas");
const producto3 = new String("Monitor de 50 pulgadas"); //Cuando uso el new
//lo convierto en objeto



console.log(producto);
console.log(producto2);
console.log(producto3);

console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);
*/

const producto = "Mouse";
const producto2 = "Teclado";

console.log(producto.length); //obtener el tamaño del string

//Indexof me permite encontrar un elemento en un string, el indice comienza en 0
console.log(producto2.indexOf("ado")); //sale -1 xq no encontro la palabra

//Includes (retorna true or false)
console.log(producto.includes("se"));
console.log(producto.includes("teclado"));
