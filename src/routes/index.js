/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/views/Home/Index.vue'),
  },
  {
    path: '/dashboard:type:category',
    name: 'dashboard.index',
    component: () => import('@/views/Dashboard/Index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
