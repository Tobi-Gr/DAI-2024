import axios from "axios";

const APIKEY = "b192e0e8";

const omdbApi = {
    searchByPage: async (searchText, page = 1) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`);
            return {
                respuesta: true,
                cantidadTotal: parseInt(response.data.totalResults),
                datos: response.data.Search
            };
        } catch (error) {
            console.error("Error al realizar la búsqueda por página:", error);
            return {
                respuesta: false,
                cantidadTotal: 0,
                datos: {}
            };
        }
    },

    searchComplete: async (searchText) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`);
            return {
                respuesta: true,
                cantidadTotal: parseInt(response.data.totalResults),
                datos: response.data.Search
            };
        } catch (error) {
            console.error("Error al realizar la búsqueda:", error);
            return {
                respuesta: false,
                cantidadTotal: 0,
                datos: {}
            };
        }
    },

    getByImdbID: async (imdbID) => {
        try {
            const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`);
            return {
                respuesta: true,
                datos: response.data
            };
        } catch (error) {
            console.error("Error al realizar la búsqueda por ID:", error);
            return {
                respuesta: false,
                datos: {}
            };
        }
    }
};

export default omdbApi;