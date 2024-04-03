let miUrl = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo');
let miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL)
{
    let parametros = {};
    laURL.searchParams.forEach((valor, clave) => {
        parametros[clave] = valor;
    });
    
    return {
        host: laURL.host, 
        pathname: laURL.pathname, 
        parametros: parametros};
}