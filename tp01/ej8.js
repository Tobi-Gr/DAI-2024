import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./src/modules/OMDBWrapped.js"

let respuesta = await OMDBSearchByPage("superman", 1)
console.log('Busqueda de Superman en la 1era página: ', respuesta)

respuesta = await OMDBSearchComplete("barbie")
console.log('Busqueda de Barbie: ', respuesta);

respuesta = await OMDBGetByImdbID("tt0067992");
console.log('Búsqueda del ID tt0067992: ', respuesta);