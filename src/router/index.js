import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const VCConversation = () => import('../views/VC-Conversation.vue');
const VCNotice = () => import('../views/VC-Notice.vue');
const NotFound = () => import('../views/NotFound.vue');

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/conversation',
      name: 'conversation',
      component: VCConversation,
    },
    {
      path: '/notice',
      name: 'notice',
      component: VCNotice,
    },
    {
      path: '/404',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect:
      {
        name: 'not-found'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});