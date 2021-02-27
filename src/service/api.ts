import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com',
    params: { key: 'ee2a916a', array_limit: 7 },
});

export default api;
