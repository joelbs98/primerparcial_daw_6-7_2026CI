const numeros = [1, 2, 3, 4, 5];
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo"); //menos comun
console.table(meses);

//añadir elemento a un arreglo
//no recomendada
numeros[6] = 60;
numeros[2] = 10;
//no recomendada con push
numeros.push(30); //agregar al final del arreglo
numeros.push(30, 50, 15);
//no recomendada con unshift
numeros.unshift(20, 10, -2); //agregar al inicio del arreglo
//eliminar elemento del arreglo
numeros.pop(); //eliminar el ultimo elemento del arreglo
numeros.shift(); //eliminar el primer elemento del arreglo
numeros.splice(1, 3);
//Rest operator o Spread Operator
const nuevosNumeros = [1000, ...numeros]; //buena practica ya que no modifica el arreglo original
console.table(numeros);
console.table(nuevosNumeros);
