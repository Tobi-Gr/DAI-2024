import {Router} from 'express';
import Middleware from './../middlewares/authenticationMiddleware.js';
import ProvinceService from './../services/province-service.js';
import ValidationsHelper from '../helpers/validations-helper.js';
import EnrollmentService from './../services/enrollment-service.js';
const router = Router();
const v = new ValidationsHelper();
const svcP = new ProvinceService();
const svc = new EnrollmentService();
const mw = new Middleware();

router.post('/:id/enrollment', mw.AuthMiddleware, async (req, res) => {
    /*POST        /api/event/{id}/enrollment/                (necesita autenticación)

Registra al usuario (autenticado) al evento enviado por parámetro.

Retorna un status code 201 (created), sí se pudo registrar.

Retorna un status code 400 (bad request) y un mensaje de error en los siguientes casos:

    Exceda la capacidad máxima de registrados (max_assistance) al evento.
    Intenta registrarse a un evento que ya sucedió (start_date), o la fecha del evento es hoy.
    Intenta registrarse a un evento que no está habilitado para la inscripción (enabled_for_enrollment).
    El usuario ya se encuentra registrado en el evento.
    Retorna un status code 401 (Unauthorized) y un mensaje de error en caso de que el usuario no se encuentre autenticado.

Retorna un status code 404 (not found) en caso de que el id sea inexistente.*/
});

export default router;