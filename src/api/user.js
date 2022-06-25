import http from '@/utils/http';

export function login(data) {
  return http({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function getInfo(data) {
  return http({
    url: '/user/getInfo',
    method: 'post',
    data
  });
}

export function getMenu(data) {
  return http({
    url: '/user/getMenu',
    method: 'post',
    data
  });
}
