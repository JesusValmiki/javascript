const personaArreglo = ['Carlos', 27, 'correo@correo.com', true, true];

// !cuando una variable esta dentro de un objeto se le conoce como propiedad, ej persona, edad, correo, suscripciones
const persona = {
	nombre: 'Carlos',
	edad: 27,
	correo: 'correo@correo.com',
	suscripciones: {
		web: true,
		correo: true,
	},
	coloresFavoritos: ['Negro', 'Rojo'],
// !las funciones dentro de un objeto son metodos
	saludo: function () {
		alert('Hola!');
	},
};

// console.log(persona.coloresFavoritos[1]);
// console.log(persona.suscripciones.web);
// console.log(persona.edad);
// console.log(persona['edad']);


const variable = 'suscripciones';
// console.log(persona[variable]);

persona.pais = 'Mexico';
persona.pais = 'España';

console.log(persona);
persona.saludo();
