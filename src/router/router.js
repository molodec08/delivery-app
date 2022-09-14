import { createRouter, createWebHistory } from "vue-router";
import store from '@/store'
import Main from "@/pages/Main";
import Login from "@/pages/Login";
import OrderIdPage from "@/pages/OrderIdPage";

const routes = [
  {
    path: '/',
    component: Main,
    meta: { auth: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { auth: false }
  },
  {
    path: '/:id',
    component: OrderIdPage,
    meta: { auth: true }
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;

  if (requireAuth && store.getters.isAuth) {
    next();
  } else if (requireAuth && !store.getters.isAuth) {
    next("/login");
  } else {
    next();
  }
})

export default router;