import DBHelper from '../helpers/database-helper.js';
const dbh = new DBHelper();

export default class EnrollmentRepository {

    createAsync = async (entity) =>
    {
        let sql = `INSERT INTO public.event_enrollments(id_event, id_user, description, registration_date_time, attended, observations, rating)
                        VALUES($1, $2, $3, $4, B'0', null, null)`;
        let registration_d_t = new Date();        
        let values = [entity.id_event, entity.id_user, entity.description, registration_d_t];
        return dbh.requestOne(sql, values);
    }

    //devuelve la cantidad de gente anotada para un evento
    countEnrolledAsync = async (id_event) =>{
        let query = 'SELECT COUNT(*) FROM public.event_enrollments WHERE id_event = $1';
        let values = [id_event];
        return dbh.requestOne(query, values);
    }

    getByUserIdAndEventId = async (id_user, id_event) => {
        let query = 'SELECT * FROM public.event_enrollments WHERE id_user = $1 AND id_event = $2';
        let values = [id_user, id_event];
        return dbh.requestOne(query, values);
    }

    deleteByIdAsync = async (id) => //Id del del enrollment
    {
        return dbh.requestOne('DELETE FROM event_enrollments WHERE id = $1', [id])
    }

    getByEvent = async (entity) => {
        let params = [];
        let conditions = [];
    
        let query = `SELECT DISTINCT users.* 
                     FROM public.users 
                     INNER JOIN public.event_enrollments ON users.id = event_enrollments.id_user
                     WHERE event_enrollments.id_event = $1`;
        params.push(entity.id_event); 
    
        if (entity.nombre) {
            params.push(`%${entity.nombre}%`);
            conditions.push(`lower(users.first_name) LIKE lower($${params.length})`);
        }
    
        if (entity.apellido) {
            params.push(`%${entity.apellido}%`);
            conditions.push(`lower(users.last_name) LIKE lower($${params.length})`);
        }
    
        if (entity.username) {
            params.push(`%${entity.username}%`);
            conditions.push(`lower(users.username) LIKE lower($${params.length})`);
        }
    
        if (entity.assisted !== undefined) {
            conditions.push(`event_enrollments.attended = $${params.length + 1}`);
            params.push(entity.assisted);
        }
    
        if (entity.minRating !== undefined) {
            conditions.push(`event_enrollments.rating > $${params.length + 1}`);
            params.push(entity.minRating);
        }
    
        if (conditions.length > 0) {
            query += ` AND ${conditions.join(' AND ')}`;
        }
    
        query += ";";
        console.log(query);
    
        return dbh.requestValues(query, params);
    }
}    