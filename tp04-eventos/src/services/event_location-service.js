import EventLocationRepository from './../repositories/event_location-repository.js';

export default class EventLocationService {
    getAllAsync = async () => {
        const repo = new EventLocationRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const repo = new EventLocationRepository();
        const returnArray = await repo.getByIdAsync(id);
        return returnArray;
    }
    
    getByIdLocationAsync = async (id) => {
        const repo = new EventLocationRepository();
        const returnArray = await repo.getByIdLocationAsync(id);
        return returnArray;
    }

    createEventLocation = async (entity) => {
        const repo = new EventLocationRepository();
        const created = await repo.createEventLocation(entity);
        return created;
    }
}