import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/yjh',
    name: 'YjhC',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Yjh',
        component: () => import('@/views/yjh/index.vue')
      }
    ]
  },
  {
    path: '/rjh',
    name: 'RjhC',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Rjh',
        component: () => import('@/views/rjh/index.vue')
      }
    ]
  }
];

export default routes;
