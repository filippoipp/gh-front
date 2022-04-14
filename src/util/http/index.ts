import axios from 'axios';

export const httpRequests = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})
