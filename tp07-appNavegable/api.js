import axios from 'axios';

const urlApi = 'http://localhost:3000/api/'; //puede ser que tenga que cambiar este puerto a 5000?

export const api = axios.create({
  baseURL: urlApi,
  headers: {
    'Content-Type': 'application/json',
  },
});