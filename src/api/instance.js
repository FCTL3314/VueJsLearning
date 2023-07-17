import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://special-recipe.space/api/v1/',
  withCredentials: this,
  headers: {
    accept: 'application/json',
  },
});

export default instance;
