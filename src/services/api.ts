import axios from 'axios';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  baseURL: 'https://api.punkapi.com/v2/',
});

export default api;
