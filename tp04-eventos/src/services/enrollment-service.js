import EnrollmentRepository from '../repositories/enrollment-repository.js';
const repo = new EnrollmentRepository();

export default class EnrollmentService {
    createAsync = async (entity) => {
        const created = await repo.createAsync(entity);
        console.log("Enrollment: ", created);
        return created;
    }

    countEnrolledAsync = async (id_event) => {
        const count = await repo.countEnrolledAsync(id_event);
        return count;
    }

    getByUserIdAndEventId = async (id_user, id_event) => {
        const registration = await repo.getByUserIdAndEventId(id_user, id_event);
        return registration;
    }

    getByEvent = async (id_event, filtro) =>
    {

        const returnArray = await repo.getByEventAsync(id_event, filtro);
        return returnArray;
    }
}
