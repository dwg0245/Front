import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      name: 'board',
      path: '/board/save',
      meta: {
        title: '게시판',
        requiresAuth: false,
      },
      component: () => import('../views/board/board.vue'),
    },
  ],
})

export default router
