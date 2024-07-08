import {Router} from 'express';
import EventService from './../services/event-service.js';
import EventLocationService from './../services/event_location-service.js';
import ValidationsHelper from '../helpers/validations-helper.js';
import AuthMiddleware from '../middlewares/authenticationMiddleware.js';
const router = Router();
const svc = new EventService();
const v = new ValidationsHelper();
const am = new AuthMiddleware();
const svc_el = new EventLocationService();

//router.get('', async(req, res) => {
    /*const returnArray = await svc.getAllAsync();
    if(returnArray != null)
        return res.status(200).json(returnArray);
    else
        return res.status(500).send(`Error interno.`);*/
//});

router.get('', async (req, res) => { 
    let data = await svc.getByFilter(req.query);
    return res.send(data);
});

router.get('/:id', async (req, res) => { 
    let data = await svc.getDetails(req.params.id);
    if (data){
        return res.status(200).send(data);
    }
    return res.status(404).send("Id no encontrado.");
});

router.post('', am.AuthMiddleware, async (req, res) => {

    let eventLocation = await svc_el.getByIdAsync(req.id);
    if (req.body.name.length < 3 || req.body.description.length < 3)
        return res.status(400).send("Bad request, nombre y descripción tienen que tener más de tres caracteres");
    if (req.body.price < 0 || req.body.duration_in_minutes < 0)
        return res.status(400).send("Bad request, el precio y la duración en minutos tienen que ser mayores o iguales a cero");
    if(req.body.max_assistance > eventLocation.max_assistance) //max assistence da null
        return res.status(400).send("Bad request, la asistencia del evento excede los límites de la locación");   
    
        return res.status(200).send("Evento creado.");
});

//no estamos usando el validator, pero lo importamos por alguna razón

export default router;