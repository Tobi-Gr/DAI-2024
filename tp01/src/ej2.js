/* Importo la constante PI, y las funciones sumar y
multiplicar del módulo matematica y las utilizo. */
// La siguiente línea importa una constante y dos funciones para luego utilizarlas.
import {PI, sumar, multiplicar} from './modules/matematica.js';
let total, numero1 = 10, numero2 = 20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total}`);