/* Exporto desde el módulo "matematicas" la constante PI,
la funciones sumar y multiplicar */
const PI = 3.14;
const sumar = (x, y) => x + y;
const multiplicar = (a, b) =>  a*b;

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, multiplicar};