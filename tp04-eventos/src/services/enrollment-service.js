import EnrollmentRepository from '../repositories/enrollment-repository.js';
const repo = new EnrollmentRepository();

export default class EnrollmentService {
    createAsync = async (entity) => {
        const created = await repo.createAsync(entity);
        return created;
    }
}
