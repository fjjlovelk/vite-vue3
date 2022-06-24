import axios from 'axios';

const service = axios.create({
  baseURL: '',
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export default service;
