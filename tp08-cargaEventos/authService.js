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
    const response = await api.get('category/', credentials);
    return response.data;
  } catch (error) {
    console.error('Error en la carga de categorías:', error);
    throw error;
  }
};

export const getLocations = async (credentials) => {
  try {
    const response = await api.get('event-location/', credentials);
    return response.data;
  } catch (error) {
    console.error('Error en la carga de localidades:', error);
    throw error;
  }
};

export const getEventos = async(credentials) => {
  try {
    const response = await api.get('event', credentials);
    return response.data;
  } catch (error) {
    console.error('Error en el fetch de los eventos:', error);
    throw error;
  }
}

// axios.post("http://localhost:5000", credentials)