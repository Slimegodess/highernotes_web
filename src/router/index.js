import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/views/SignUp.vue';
import WorkDetail from '@/views/WorkDetail.vue';
import { Auth } from 'aws-amplify';
import WorkGalleryDetail from '@/views/WorkGalleryDetail.vue';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Works from '../views/Works.vue';

const routes = [
  {
    path: '/Work/:id',
    name: 'WorkGalleryDetail',
    component: WorkGalleryDetail,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/Works',
    name: 'Works',
    component: Works,
    meta: { requiresAuth: true },
  },
  {
    path: '/Works/:id',
    name: 'WorkDetail',
    component: WorkDetail,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = await Auth.currentUserInfo();

  if (requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
