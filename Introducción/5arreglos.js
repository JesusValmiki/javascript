const arreglo = ['Texto', 456.1, false, { propiedad: 'valor', propiedad1: 'valor1' }, [1, 2, 3]];
// ?asi son las formas de acceder a un objeto dentro de un array
// console.log(arreglo[3].propiedad);
console.log(arreglo[3]['propiedad']);

const ar = [1,2,3]
ar[10] = 11
console.log(ar)

const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[0]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
// se salta un valor, y deja un espacio en la lista
colores[3] = 'Blanco';
// sobre escribe el valor del indice 3
colores[3] = 'Amarillo';


// !los arreglos realmente son objetos y los objetos tienen propiedades y metodos.
//  Las propiedades son valores que pertenecen al objeto. cuando una variable esta dentro de un objeto se le conoce como propiedad
// para acceder a un propiedad como length es por medio del punto
console.log('El arreglo colores tiene: ' + colores.length + ' colores');
// Los metodos son funciones que podemos utilizar para hacer cosas con el arreglo
// push es un metodo que permite agregar un elemento al final del arreglo
colores.push('Azul');
// *la diferencia entre el metodo y la propiedad es que el metodo utiliza parentesis