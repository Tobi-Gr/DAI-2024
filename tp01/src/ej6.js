//no funka

let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL)
{
    try
    {
        url = new URL(laURL)
        let parametros = {};
        url.searchParams.forEach((valor, clave) => {
            parametros[clave] = valor;
        });
        
        return {
            host: url.host, 
            pathname: url.pathname, 
            parametros: parametros};
    }
    catch (error) 
    {
        console.log("URL no válida:", error);
        return null;
    }
}