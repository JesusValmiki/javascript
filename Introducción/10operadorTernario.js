// puede ser vip o regular
const boleto = 'vip';
// let codigoDeAcceso;

// if (boleto === 'vip') {
// 	codigoDeAcceso = 'VIP-123-456';
// } else {
// 	codigoDeAcceso = 'REGULAR-456-789';
// }
// console.log(codigoDeAcceso)

// Esta guardando en la variable codigoDeAcceso el codigo del boleto considerando si es vip o no
const codigoDeAcceso = boleto === 'vip' ? 'VIP-123-456' : 'REGULAR-456-789';

// imprimiento en consola si su pantalla es vip o no
boleto === 'vip' ? console.log('Tu boleto es de tipo VIP') : console.log('Tu boleto es de tipo REGULAR');
