import EventLocationRepository from './../repositories/event_location-repository.js';

export default class EventLocationService {
    getByIdAsync = async (id) => {
        const repo = new EventLocationRepository();
        const returnArray = await repo.getByIdAsync(id);
        return returnArray;
    }
}