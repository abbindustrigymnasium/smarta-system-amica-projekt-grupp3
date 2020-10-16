// import { Meta } from 'quasar'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/FoodStatusBasic.vue'), meta: { requiresAuth: true } },
      { path: 'status', component: () => import('pages/StatusPage.vue'), meta: { requiresAuth: true } },
      { path: 'nettan', component: () => import('pages/nettan.vue'), meta: { requiresAuth: true } }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/login.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
