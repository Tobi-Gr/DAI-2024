import Alumno from "./src/models/alumno.js";
import matematica from "./src/modules/matematica.js";
import omdbApi from "./src/modules/OMDBwrapped.js";
import validacionesHelper from "./src/modules/validaciones-helper.js";

import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));
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
    let nombre = validacionesHelper.getStringOrDefault(req.params.nombre, '');
    res.send(`Hola ${nombre}!`);
})

app.get('/validarfecha/:anio/:mes/:dia', (req, res) => { // EndPoint "/validarfecha"
    let anio = req.params.anio ?? '2000'; //si no te manda ningún año, es 2000 por default
    let mes = req.params.mes ?? '1';
    let dia = req.params.dia ?? '1';

    let fecha  = `${anio}-${mes}-${dia}`;
    let fechaRes = null;
    fechaRes= Date.parse(fecha);
    console.log('fechaRes', fechaRes);
    if(isNaN(fechaRes)){
        res.sendStatus(400);
    } else{
        res.sendStatus(200);
    }
})

app.get('/matematica/sumar',(req, res) =>{
    let n1 = validacionesHelper.getIntegerOrDefault(req.query.n1, 1);
    let n2 = validacionesHelper.getIntegerOrDefault(req.query.n2, 1);
    let resultado = matematica.sumar(n1, n2);
    res.send(resultado.toString());
})


app.get('/matematica/restar', (req, res)=> {
    let n1 = validacionesHelper.getIntegerOrDefault(req.query.n1, 1);
    let n2 = validacionesHelper.getIntegerOrDefault(req.query.n2, 1);
    let resultado = matematica.restar(n1, n2);
    res.send(resultado.toString()); 
})

app.get('/matematica/multiplicar', (req, res)=> {
    let n1 = validacionesHelper.getIntegerOrDefault(req.query.n1, 1);
    let n2 = validacionesHelper.getIntegerOrDefault(req.query.n2, 1);
    let resultado = matematica.multiplicar(n1, n2);
    res.send(resultado.toString()); 
})

app.get('/matematica/dividir', (req, res)=> {
    if (req.query.n2 == 0)
    {
        res.sendStatus(400);
        res.send("El divisor no puede ser cero");
    }
    else
    {
        let n1 = validacionesHelper.getIntegerOrDefault(req.query.n1, 1);
        let n2 = validacionesHelper.getIntegerOrDefault(req.query.n2, 1);
        let resultado = matematica.dividir(n1, n2);
        res.send(resultado.toString());
    }
})

app.get('/omdb/searchbypage', async (req, res)=> {

    let search = validacionesHelper.getStringOrDefault(req.query.search, '%');
    let page = validacionesHelper.getIntegerOrDefault(req.query.p);
    let response = await omdbApi.searchByPage(search, page);
    res.send(response);
})

app.get('/omdb/searchcomplete', async (req, res)=> {

    let search = validacionesHelper.getStringOrDefault(req.query.search);
    let response = await omdbApi.searchComplete(search);
    res.send(response);
})

app.get('/omdb/getbyomdbid', async (req, res)=> {
    let id = validacionesHelper.getStringOrDefault(req.query.omdbid, 'tt0317219');
    let response = await omdbApi.getByImdbID(req.query.omdbid);
    res.send(response);
})


app.get('/alumnos', (req, res) =>
{
    res.sendStatus(200);
})

app.get('/alumnos/:dni', (req, res) =>
{
    let dni = validacionesHelper.getIntegerOrDefault(req.params.dni, -1);
    if (dni == -1)
    {
        res.status(400);
    }
    let estudiante = alumnosArray.find(alumno => alumno.dni === dni);
    if (estudiante) {
        res.send(estudiante);
    } else {
        res.status(404);
    }
})

app.post('/alumnos', (req, res)=>
{
    let username = validacionesHelper.getStringOrDefault(req.body.username, '');
    let dni = validacionesHelper.getIntegerOrDefault(req.body.dni, -1);
    let edad = validacionesHelper.getIntegerOrDefault(req.body.edad, -1)
    if(dni != - 1 && edad != -1 && username != '')
    {
        const nuevoAlumno = {
            username: username,
            dni: dni,
            edad: edad
        };
        alumnosArray.push(nuevoAlumno);
        res.sendStatus(201);
    }
    res.sendStatus(400);
})

app.delete('/alumnos', (req, res) =>
{
    let search = validacionesHelper.getIntegerOrDefault(req.body.dni, -1);
    if (search != -1)
    {
        let index = alumnosArray.findIndex(alumno => alumno.dni == search);
        if (index !== -1)
        {
            alumnosArray.splice(index, 1);
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
    }
    res.sendStatus(400);
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})