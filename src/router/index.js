import { createRouter, createWebHashHistory } from 'vue-router';
import constantRoutes from './constant-routes';
import asyncRoutes from './async-routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...asyncRoutes, ...constantRoutes]
});

export default router;
