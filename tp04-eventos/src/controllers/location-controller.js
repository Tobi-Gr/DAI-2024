import {Router} from 'express';
import LocationService from './../services/location-service.js';
import ValidationsHelper from '../helpers/validations-helper.js';
const router = Router();
const svc = new LocationService();
const v = new ValidationsHelper();

router.get('', async(req, res) => {
    const returnArray = await svc.getAllAsync();
    if(returnArray != null)
        return res.status(200).json(returnArray);
    else
        return res.status(500).send(`Error interno.`);
});

router.get('/:id', async (req, res) => { 
    let respuesta;
    if(v.isANumber(req.params.id))
    {
        const returnLocation = await svc.getByIdAsync(req.params.id);
        if(returnLocation != null)
            respuesta = res.status(200).json(returnLocation);
        else
            respuesta = res.status(404).send(`ID no encontrado.`);
    }
    else
        respuesta = res.status(400).send('Datos no válidos.');
    return respuesta;
})
//GET   /api/location/{id}/event-location
export default router;