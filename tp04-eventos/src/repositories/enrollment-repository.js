import DBHelper from '../helpers/database-helper.js';
const dbh = new DBHelper();

export default class EnrollmentRepository {

    createAsync = async (entity) =>
    {
        let sql = ``;
        let registration_d_t = new Date();        
        let values = [entity.id_event, entity.id_user, entity.description, registration_d_t, false, null, null];
        return dbh.requestOne(sql, values)? true : false;
    }

    deleteByIdAsync = async (id) => //Id del usuario o del enrollment??
    {
        return dbh.requestOne('DELETE FROM event_enrollments WHERE id = $1', [id])
    }
}