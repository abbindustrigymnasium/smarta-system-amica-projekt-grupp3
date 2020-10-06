
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/FoodStatusBasic.vue') },
      { path: '/status', component: () => import('pages/StatusPage.vue') },
      { path: '/vuefire', component: () => import('pages/VueFireComponent.vue') }
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
