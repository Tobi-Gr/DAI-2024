import DBHelper from '../helpers/database-helper.js';
const dbh = new DBHelper();

export default class EnrollmentRepository {

    createAsync = async (entity) =>
    {
        let sql = `INSERT INTO public.event_enrollments(id_event, id_user, description, registration_date_time, attended, observations, rating)
                        VALUES($1, $2, $3, $4, $5, $6, $7)`;
        let registration_d_t = new Date();        
        let values = [entity.id_event, entity.id_user, entity.description, registration_d_t, false, null, null];
        return dbh.requestOne(sql, values)? true : false;
    }

    //devuelve la cantidad de gente anotada para un evento
    countEnrolledAsync = async (id_event) =>{
        let query = 'SELECT COUNT(*) FROM public.event_enrollments WHERE id_event = $1';
        let values = [id_event];
        return requestOne(query, values);
    }

    getByUserId = async (id_user) => {
        let query = 'SELECT * FROM public.event_enrollments WHERE id_user = $1';
        let values = [id_user];
        return requestOne(query, values);
    }

    deleteByIdAsync = async (id) => //Id del del enrollment
    {
        return dbh.requestOne('DELETE FROM event_enrollments WHERE id = $1', [id])
    }
}