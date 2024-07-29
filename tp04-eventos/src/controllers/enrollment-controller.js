import {Router} from 'express';
import Middleware from './../middlewares/authenticationMiddleware.js';
import ValidationsHelper from '../helpers/validations-helper.js';
import EnrollmentService from './../services/enrollment-service.js';
import UserService from './../services/user-service.js';

const router = Router();
const v = new ValidationsHelper();
const svc = new EnrollmentService();
const mw = new Middleware();
const svc_user = new UserService();

router.get('/:id/enrollment', mw.AuthMiddleware, async(req, res) => {
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
    const registered = await svc.getByIdUser(user.id); //el enrollment tendría que tener en cuenta el usuario Y EL EVENTO
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

export default router;