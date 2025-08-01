import axios from 'axios';

const BASE_URL = 'https://mixposapi.nicadevs.com';

const apiClient = {
  async get(endpoint, requiresAuth = true) {
    const headers = {};
    if (requiresAuth) {
      const token = localStorage.getItem('token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }
    const { data } = await axios.get(`${BASE_URL}${endpoint}`, { headers });
    return data;
  },

  async post(endpoint, body, requiresAuth = true) {
    const headers = {};
    if (requiresAuth) {
      const token = localStorage.getItem('token');
      if (token) headers['Authorization'] = `Bearer ${token}`;
    }
    const { data } = await axios.post(`${BASE_URL}${endpoint}`, body, { headers });
    return data;
  }
};

export default apiClient;
