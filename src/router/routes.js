
const routes = [
  { path: '/', redirect: '/list' },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    meta: { authorizedOperations: ['NO_OP'] },
    children: [
      { path: 'list', component: () => import('pages/Index.vue'), meta: { authorizedOperations: ['NO_OP'] } },
    ]
  },
  { path: '/login', component: () => import('pages/Login'), meta: { authorizedOperations: ['NO_OP'] } },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
