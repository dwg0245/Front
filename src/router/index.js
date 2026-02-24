import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      name: 'boardSave',
      path: '/board/save',
      meta: {
        title: '게시판',
        requiresAuth: false,
      },
      component: () => import('../views/board/Board.vue'),
    },
    {
      name: 'boardList',
      path: '/board/list',
      meta: {
        title: '게시판 목록 조회',
        requiresAuth: false,
      },
      component: () => import('../views/board/BoardList.vue'),
    },
    {
      name: 'boarddesc',
      path: '/board/desc',
      meta: {
        title: '게시판 목록 상세 조회',
        requiresAuth: false,
      },
      component: () => import('../views/board/BoardDesc.vue'),
    },
  ],
})

export default router
