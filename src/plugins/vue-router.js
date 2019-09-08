/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes';
// import store from '@/store';

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode: 'history',
});

Vue.router = router;

export default {
  router,
};
