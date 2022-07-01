import axios from 'axios';

const service = axios.create({
  baseURL:
    'https://www.fastmock.site/mock/12607e6352734dd48f910016cbe1abb0/demo',
  // '',
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default service;
