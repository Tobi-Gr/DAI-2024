import EnrollmentRepository from '../repositories/enrollment-repository.js';
const repo = new EnrollmentRepository();

export default class EnrollmentService {
    createAsync = async (entity) => {
        const created = await repo.createAsync(entity);
        return created;
    }

    countEnrolledAsync = async (id_event) => {
        const count = await repo.countEnrolledAsync(id_event);
        return count;
    }

    getByIdUser = async (id_user) => {
        const registration = await repo.countEnrolledAsync(id_user);
        return registration;
    }
}
