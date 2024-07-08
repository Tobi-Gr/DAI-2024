import DBHelper from '../helpers/database-helper.js';
const dbh = new DBHelper();

export default class EventLocationRepository {

    getByIdAsync = async (id) =>
    {
        return dbh.requestOne('SELECT * FROM public.event_locations WHERE id = $1;', [id]);
    }
}