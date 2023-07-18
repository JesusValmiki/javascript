// 📌 Forma #1
function saludo() {
	console.log('Hola!');
}
// la constante esta almacenando la funcion, si se le ponen parentecis a saludo entonces llama a la funcion
const constante = saludo();
console.log(constante)

// 📌 Forma #2 - se guarda la funcion en la variable saludo que tmb es el nombre de la funcion
const hola = function () {
	console.log('Hola desde variable!');
};

// 📌 Forma #3 - Función de tipo flecha. El guardarlo en una funcion es opcional
// las siguientes funciones son iguales
// const saludito = () => {
// 	console.log('Hola!');
// };
const saludito = () => console.log('Hola!');

// asi se llama a la funcion
saludo();
hola();
saludito();
