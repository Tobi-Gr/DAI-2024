import {Router} from 'express';
import EventLocationService from '../services/event_location-service.js';
import AuthMiddleware from '../middlewares/authenticationMiddleware.js';
import ValidationsHelper from '../helpers/validations-helper.js';
const router = Router();
const svc = new EventLocationService();
const mw = new AuthMiddleware();
const v = new ValidationsHelper(); 

router.get('/', mw.AuthMiddleware, async(req, res) => {
    const returnArray = await svc.getAllAsync();
    if(returnArray != null)
        return res.status(200).json(returnArray);
    else
        return res.status(401).send(`Error 401. Unauthorized access.`);
});

router.get('/:id', mw.AuthMiddleware, async (req, res) => { 
    let respuesta;
    if(v.isANumber(req.params.id))
    {
        const returnEventLocation = await svc.getByIdAsync(req.params.id);
        if(returnEventLocation != null)
            respuesta = res.status(200).json(returnEventLocation);
        else
            respuesta = res.status(404).send(`ID no encontrado.`);
    }
    else
        respuesta = res.status(400).send('Datos no válidos.');
    return respuesta;
});

router.post('', am.AuthMiddleware, async (req, res) => {
    
});


export default router;