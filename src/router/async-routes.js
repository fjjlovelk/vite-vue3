import Layout from '@/layout/index.vue';

const routes = [
  {
    path: '/user-management',
    name: 'UserManagement',
    component: Layout,
    children: [
      {
        path: '/user-management/user-add',
        name: 'UserAdd',
        component: () => import('@/views/demo/user-add.vue')
      },
      {
        path: '/user-management/user-delete',
        name: 'UserDelete',
        component: () => import('@/views/demo/user-delete.vue')
      }
    ]
  },
  {
    path: '/person-center',
    name: 'PersonCenter',
    component: Layout,
    children: [
      {
        path: '/person-center/edit-password',
        name: 'EditPassword',
        component: () => import('@/views/demo/edit-password.vue')
      }
    ]
  }
];

export default routes;
