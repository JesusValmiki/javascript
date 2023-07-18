/* 📌 Local Scope o Variables Locales
	- Son las variables declaradas dentro de una función.
	- Solo podemos acceder a ellas desde dentro de la función.
	
*/

var numero = 1;
var obtenerNumeroLetras = (nombre) => {
	var numero = nombre.length;
	// - Si usamos una variable dentro de la funcion la buscara dentro pero sino la encuentra la buscará fuera
	console.log(`${nombre} tiene ${numero} letras`);

	var funcionAnidada = () => {
		console.log(numero);
	};
	funcionAnidada();
};

obtenerNumeroLetras('Alex');

console.log(numero);
