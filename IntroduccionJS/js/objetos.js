//Objetos
/*
const nombreProducto = "Monitor";
const precio = 300;
const disponible = true;

//sintaxis de un objeto
const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 200,
  disponibilidad: true,
  categoria: "Monitores",
};

console.log(producto);

console.log(producto.precio); //acceder a una propiedad de un objeto

console.log(producto["precio"]); //otra forma de acceder
*/
const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 200,
  disponibilidad: true,
  categoria: "Monitores",
};
producto.imagen = "imagen.jpg"; //añadir una propiedad a un objeto
delete producto.disponibilidad; //eliminar propiedad de un objeto
console.log(producto);
