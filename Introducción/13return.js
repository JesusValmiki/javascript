const operacion = (tipo, numero1, numero2) => {
	if (tipo === 'suma') {
		return numero1 + numero2;
	} else if (tipo === 'resta') {
		return numero1 - numero2;
	}
};

const miVariable = operacion('suma', 150, 111);
console.log(miVariable);



// return devuelve el resultado en vez de mostrarlo.


// la funcion solo tiene (por buenas practicas) que hacer una operacion, no 2 como imprimir y sumar