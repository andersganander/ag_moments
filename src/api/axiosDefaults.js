import axios from 'axios';

axios.defaults.baseURL = 'https://ag-drf-api-69137997df7c.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();