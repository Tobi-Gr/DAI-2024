import axios from 'axios';

const urlApi = '/api/user/login';

export const api = axios.create({
  baseURL: urlApi,
  headers: {
    'Content-Type': 'application/json',
  },
});
