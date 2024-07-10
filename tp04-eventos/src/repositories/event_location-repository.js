import DBHelper from '../helpers/database-helper.js';
const dbh = new DBHelper();

export default class EventLocationRepository {

    getAllAsync = async () =>
    {
        return dbh.requestValues('SELECT * FROM public.event_locations;');
    }

    getByIdAsync = async (id) =>
    {
        return dbh.requestOne('SELECT * FROM public.event_locations WHERE id = $1;', [id]);
    }

    getByIdLocationAsync = async (id) => {
        return dbh.requestValues('SELECT * FROM public.event_locations WHERE id_location = $1;', [id]);
    }

    createEventLocation = async (entity) => {
        let created = await dbh.requestOne(`
        INSERT INTO public.event_locations(id_location, name, full_address, max_capacity, latitude, longitude, id_creator_user)
            VALUES($1, $2, $3, $4, $5, $6, $7)`,
        [entity.id_location, entity.name, entity.full_address, entity.max_capacity, entity.latitude, entity.longitude, 
        entity.id_creator_user])
        return created;
    }
}