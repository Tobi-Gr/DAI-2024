import {Router} from 'express';
import EventService from './../services/event-service.js';
import EventLocationService from './../services/event_location-service.js';
import ValidationsHelper from '../helpers/validations-helper.js';
import UserService from '../services/user-service.js';
import EnrollmentService from '../services/enrollment-service.js';
import AuthMiddleware from '../middlewares/authenticationMiddleware.js';
const router = Router();
const svc = new EventService();
const v = new ValidationsHelper();
const am = new AuthMiddleware();
const svc_el = new EventLocationService();
const svc_enrollment = new EnrollmentService();
const svc_user = new UserService();


router.get('/:id/enrollment', am.AuthMiddleware, async(req, res) => {
    if(!v.isANumber(req.params.id))
        return res.status(400).send("Id tiene que ser un número.");
    
    let event = await svc.getById(req.params.id);    
    let enrolled = await svc_enrollment.countEnrolledAsync(req.params.id);
    if(enrolled + 1 > event.max_assistance)
    {
        return res.status(400).send("Superás la cantidad máxima de registros.");
    }
    let today = new Date();  
    if(event.start_date <= today){
        return res.status(400).send("Tenés que registrarte a un evento que sea mañana o después.");
    }
    if(!event.enabled_for_enrollment)
    {
        return res.status(400).send("El evento no está disponible para registros.");
    }    
    const user = await svc_user.getByUsernameAsync(req.user.username);
    const registered = await svc_enrollment.getByIdUser(user.id);
    if(registered)
    {
        return res.status(400).send("Ya estás registrado para este evento.");
    }

    svc_enrollment.createAsync({
        "id_event": event.id,
        "id_user": user.id,
        "description": event.description,
    });
    return res.status(201).send("Te registraste.");
});

router.get('', async(req, res) => {
    const returnArray = await svc.getAll(req.query.pagina, req.query.limit);
    if(returnArray != null)
        return res.status(200).json(returnArray);
    else
        return res.status(500).send(`Error interno.`);
});

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