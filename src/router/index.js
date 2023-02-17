import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '線上辦卡',
    component: () => import('../views/OnlineApply.vue'),
    meta: {
      title: '線上辦卡'
    }
  },
  // ? 卡友
  {
    path: '/OnLineApply_y',
    name: '我是聯邦卡友/存戶',
    component: () => import('../views/CardFriendYes/OnLineApply_y.vue'),
    meta: {
      title: '我是聯邦卡友/存戶'
    }
  },
  // ? 非卡友
  {
    path: '/OnLineApply_n',
    name: '我不是聯邦卡友',
    component: () => import('../views/CardFriendNo/OnLineApply_n.vue'),
    meta: {
      title: '我不是聯邦卡友'
    }
  }
  // ? 非卡友-書面
  // ? 非卡友-線上-存戶
  // ? 非卡友-線上-他行信用卡驗證
  // ? 非卡友-線上-他行銀行帳戶驗證
  // ? 非卡友-線上-共用
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
