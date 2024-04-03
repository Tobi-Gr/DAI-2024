import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino){
    fs.readFile(origen, null, function(err, data){
        fs.writeFile(destino, data, function (err) 
        {
            if (err) throw err;
        });
    });
}
