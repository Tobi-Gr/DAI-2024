let textoEntrada01 = "Escuela";
let textoEntrada02 = "ORT";
let textoSalida = concatInvert(textoEntrada01, textoEntrada02);
console.clear(); // Borra la pantalla en la consola.
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`);
console.log(`Texto de Salida: "${textoSalida}"`);

function concatInvert(texto1, texto2)
{
    let returnValue = '';
    let textosJuntos = texto1 + texto2;
    let largoTexto = textosJuntos.length;
    for (let i = 0; i < largoTexto; i++) {
        returnValue += textosJuntos[largoTexto-i-1]
    }
    return returnValue;
}