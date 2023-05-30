import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'llistat', component: () => import('pages/GrupCooperatiuList.vue') },
      { path: 'mescla', component: () => import('pages/GrupCooperatiuForm.vue') },
      { path: 'mescla/:id', component: () => import('pages/GrupCooperatiuForm.vue') },
      { path: 'items', component: () => import('pages/ItemList.vue') },
      { path: 'item', component: () => import('pages/ItemForm.vue') },
      { path: 'item/:id', component: () => import('pages/ItemForm.vue') },
      { path: 'login', component: () => import('components/common/Login.vue'), props: { urlRedirect: "/llistat" } },
      { path: 'logout', component: () => import('components/common/Logout.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
