import DBHelper from '../helpers/database-helper.js';
const dbh = new DBHelper();

export default class EventRepository {
    getAllAsync = async () => {
        //paginación ¿
        //const limit = 10; //eventos por página
        //offset es después de cuantas filas, muestra. Por ejemplo pones SELECT * from public.events order by id  OFFSET 10 LIMIT 5 
        //y te muestra las primeras 5 filas después de 10 filas
        let limit = validateInt(entity.limit, 0);
        let offset = validateInt(entity.offset, 0);
        if (req.params.limit){
            offset = req.params.page * limit;
        }
        else{
            offset = 0;        
        }
    }
    
    getByFilter = async (entity) => {
        let params = [];
        let conditions = [];

        let query = `SELECT DISTINCT events.* 
                     FROM public.events 
                     INNER JOIN public.event_categories ON events.id_event_category = event_categories.id
                     LEFT JOIN public.event_tags ON events.id = event_tags.id_event
                     LEFT JOIN public.tags ON tags.id = event_tags.id_tag
                     WHERE 1=1`;
    
        if (entity.tag) {
            conditions.push(`lower(tags.name) LIKE lower($${params.length + 1})`);
            params.push(`%${entity.tag}%`);
        }
    
        if (entity.name) {
            conditions.push(`lower(events.name) LIKE lower($${params.length + 1})`);
            params.push(`%${entity.name}%`);
        }
    
        if (entity.category) {
            conditions.push(`lower(event_categories.name) LIKE lower($${params.length + 1})`);
            params.push(`%${entity.category}%`);
        }
    
        if (entity.startdate) {
            conditions.push(`start_date = $${params.length + 1}`);
            params.push(entity.startdate);
        }
    
        if (conditions.length > 0) {
            query += ` AND ${conditions.join(' AND ')}`;
        }
    
        query += ";";
        console.log(query);
    
        return dbh.requestValues(query, params);
    }
    
    
    getById = async (id) => {
        return dbh.requestOne('SELECT * FROM public.events WHERE ID = $1', [id]);
    }

    getDetails = async (id) => {
        let event = await dbh.requestOne(
        `SELECT e.*,
        json_build_object(
            'id', l.id,
            'name', l.name,
            'id_province', l.id_province,
            'latitude', l.latitude,
            'longitude', l.longitude,
            'province', json_build_object(
                'id', pr.id,
                'name', pr.name,
                'full_name', pr.full_name,
                'latitude', pr.latitude,
                'longitude', pr.longitude,
                'display_order', pr.display_order
            )
        ) AS location,
        json_build_object(
            'id', u.id,
            'first_name', u.first_name,
            'last_name', u.last_name,
            'username', u.username,
            'password', overlay(u.password placing repeat('*', length(u.password)) from 1)
        ) AS creator_user,
        (
            SELECT json_agg(
                json_build_object(
                    'id', et.id,
                    'name', t.name
                )
            )
            FROM public.event_tags et
            LEFT JOIN public.tags t ON t.id = et.id_tag
            WHERE et.id_event = e.id
        ) AS tags,
        json_build_object(
            'id', ec.id,
            'name', ec.name,
            'display_order', ec.display_order
        ) AS event_category
    FROM public.events e
    INNER JOIN public.event_locations el ON el.id = e.id_event_location
    INNER JOIN public.locations l ON l.id = el.id_location
    INNER JOIN public.provinces pr ON pr.id = l.id_province
    INNER JOIN public.users u ON u.id = e. id_creator_user
    INNER JOIN public.event_categories ec ON ec.id = e.id_event_category
    WHERE e.id = $1`, [id]);        
        return event;
    }
    
    createEvent = async (entity) => {
        let created = await dbh.requestOne(`
        INSERT INTO public.events(name, description, id_event_category, id_event_location, start_date, 
                                    duration_in_minutes, price, enabled_for_enrollment, max_assistance, id_creator_user)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [entity.name, entity.description, entity.id_event_category, entity.id_event_location, entity.start_date, 
            entity.duration_in_minutes, entity.price, entity.enabled_for_enrollment, entity.max_assistance, 
            entity.id_creator_user])
        return created;
    }
    
    }
