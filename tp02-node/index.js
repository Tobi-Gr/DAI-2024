import Alumno from "./src/models/alumno.js"
import {sumar, multiplicar} from "./src/modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from "./src/modules/omdbwrapped.js"

import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
const app = express();
const port = 3000;
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//
// Aca pongo todos los EndPoints
//
app.get('/', (req, res) => { // EndPoint "/"
    res.send('Ya estoy respondiendo!');
})

app.get('/saludar', (req, res) => { // EndPoint "/saludar"
    res.send('Hello World!');
})

app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
    res.send(`Hola ${ req.params.nombre}`);
})

app.get('/validarfecha/:anio/:mes/:dia', (req, res) => { // EndPoint "/validarfecha"
    let anio = req.params.anio;
    let mes = req.params.mes;
    let dia = req.params.dia;

    let fecha  = `${anio}-${mes}-${dia}`;
    let fechaRes = null;
    fechaRes= Date.parse(fecha);
    console.log('fechaRes', fechaRes);
    if(isNaN(fechaRes)){
        res.sendStatus(400);
    } else{
        res.sendStatus(200);
    }
    res.send(fechaRes); //NO DEVUELVE LA FECHA 
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
