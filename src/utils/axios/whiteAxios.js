import axios from 'axios';

const whiteAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

whiteAxios.interceptors.request.use(
  (req) => req,
  (err) => Promise.reject(err)
);

whiteAxios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export default whiteAxios;
