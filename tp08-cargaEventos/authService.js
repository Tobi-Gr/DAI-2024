import { api } from './api';

export const registerUser = async (userData) => {
  try {
    const response = await api.post('user/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error en el registro: ', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('user/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
};

export const getCategories = async (credentials) => {
  try {
    const response = await api.get('category/', {headers: {
      'Authorization': `Bearer ${credentials}`}
  });
    return response.data;
  } catch (error) {
    console.error('Error en la carga de categorías:', error);
    throw error;
  }
};

export const getLocations = async (credentials) => {
  try {
    const response = await api.get('event-location/', {headers: {
      'Authorization': `Bearer ${credentials}`}
  });
    return response.data;
  } catch (error) {
    console.error('Error en la carga de localidades:', error);
    throw error;
  }
};

export const getEventos = async(credentials) => {
  try {
    const response = await api.get('event', {headers: {
      'Authorization': `Bearer ${credentials}`}
  });
    return response.data;
  } catch (error) {
    console.error('Error en el fetch de los eventos:', error);
    throw error;
  }
}

export const createEvent = async(credentials) => {
  try{
    const response = await api.post('event', credentials);
    return response.data;
  } catch(error) {
    console.error('Error al crear el evento', error);
    throw error;
  }
}

// axios.post("http://localhost:5000", credentials)