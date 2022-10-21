import axios from 'axios';

export const movieapi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});
