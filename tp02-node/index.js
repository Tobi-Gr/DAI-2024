import Alumno from "./src/models/alumno.js";
import matematica from "./src/modules/matematica.js";
import omdbApi from "./src/modules/OMDBwrapped.js";

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
    res.send(`Hola ${ req.params.nombre}!`);
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
})

app.get('/matematica/sumar',(req, res) =>{
    let resultado = matematica.sumar(parseInt(req.query.n1), parseInt(req.query.n2));
    res.send(resultado.toString());
})


app.get('/matematica/restar', (req, res)=> {
    let resultado = matematica.restar(parseInt(req.query.n1), parseInt(req.query.n2));
    res.send(resultado.toString()); 
})

app.get('/matematica/multiplicar', (req, res)=> {
    let resultado = matematica.multiplicar(parseInt(req.query.n1), parseInt(req.query.n2));
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
        let resultado = matematica.dividir(parseInt(req.query.n1), parseInt(req.query.n2));
        res.send(resultado.toString()); 
    }    
})

app.get('/omdb/searchbypage', async (req, res)=> {

    let response = await omdbApi.searchByPage(req.query.search, req.query.p);
    res.send(response);
})

app.get('/omdb/searchcomplete', async (req, res)=> {

    let response = await omdbApi.searchComplete(req.query.search);
    res.send(response);
})

app.get('/omdb/getbyomdbid', async (req, res)=> {
    let response = await omdbApi.getByImdbID(req.query.omdbid);
    res.send(response);
})


app.get('/alumnos', (req, res) =>
{
    res.sendStatus(200); //preguntar qué hay que devolver
})

app.get('/alumnos/:dni', (req, res) =>
{
    let estudiante = alumnosArray.find(alumno => alumno.dni === req.params.dni);
    if (estudiante) {
        res.send(estudiante);
    } else {
        res.status(404);
    }
})

app.post('/alumnos', (req, res)=>
{
    const nuevoAlumno = {
        username: req.body.username,
        dni: req.body.dni,
        edad: req.body.edad
    };
    alumnosArray.push(nuevoAlumno);
    res.sendStatus(201);
})

app.delete('/alumnos', (req, res) => //siempre devuelve 404
{
    let index = alumnosArray.findIndex(alumno => alumno.dni == req.params.dni);
    if (index !== -1)
    {
        alumnosArray.splice(index, 1);
        res.sendStatus(200);
    }
    else {
        res.sendStatus(404);
    }
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})