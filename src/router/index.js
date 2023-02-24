import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../Template/Layout.vue'),
    children: [
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
      {
        path: '/OnLineApply_OTP',
        name: '卡友-手機OTP驗證',
        component: () => import('../views/CardFriendYes/OnLineApply_OTP.vue'),
        meta: {
          title: '卡友-手機OTP驗證'
        }
      },
      {
        path: '/OnLineApply_Fillin',
        name: '卡友-資料確認，詳閱各項條款',
        component: () => import('../views/CardFriendYes/OnLineApply_Fillin.vue'),
        meta: {
          title: '卡友-資料確認，詳閱各項條款'
        }
      },
      {
        path: '/OnLineApply_Fillin_Card',
        name: '卡友-KYC資料確認',
        component: () => import('../views/CardFriendYes/OnLineApply_Fillin_Card.vue'),
        meta: {
          title: '卡友-KYC資料確認'
        }
      },
      {
        path: '/OnLineApply_Fillin_1',
        name: '卡友-個資使用條款',
        component: () => import('../views/CardFriendYes/OnLineApply_Fillin_1.vue'),
        meta: {
          title: '卡友-個資使用條款'
        }
      },
      {
        path: '/OnLineApply_Fillin_Download',
        name: '卡友-點選下載申請書',
        component: () => import('../views/CardFriendYes/OnLineApply_Fillin_Download.vue'),
        meta: {
          title: '卡友-點選下載申請書'
        }
      },
      {
        path: '/OnLineApply_Fillin_Finish',
        name: '卡友-送出申請',
        component: () => import('../views/CardFriendYes/OnLineApply_Fillin_Finish.vue'),
        meta: {
          title: '卡友-送出申請'
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
      },
      // ? 非卡友-書面
      {
        path: '/Written',
        name: '申請資料填寫',
        component: () => import('../views/CardFriendNo/Written/Written.vue'),
        meta: {
          title: '申請資料填寫'
        }
      },
      {
        path: '/Written_1',
        name: '職業資料',
        component: () => import('../views/CardFriendNo/Written/Written_1.vue'),
        meta: {
          title: '職業資料'
        }
      },
      {
        path: '/Written_2',
        name: '個資使用條款',
        component: () => import('../views/CardFriendNo/Written/Written_2.vue'),
        meta: {
          title: '個資使用條款'
        }
      },
      {
        path: '/Written_3',
        name: '確認填寫資料',
        component: () => import('../views/CardFriendNo/Written/Written_3.vue'),
        meta: {
          title: '確認填寫資料'
        }
      },
      // ? 非卡友-線上-存戶
      // ? 非卡友-線上-他行信用卡驗證
      {
        path: '/OnLineApply_Chk',
        name: '線上辦卡(已持有其他銀行信用卡)',
        component: () => import('../views/CardFriendNo/Online/OnLineApply_Chk.vue'),
        meta: {
          title: '線上辦卡'
        }
      },
      // ? 非卡友-線上-他行銀行帳戶驗證
      {
        path: '/OnLineApply_ChkSZ',
        name: '線上辦卡(已持有其他銀行帳戶)',
        component: () => import('../views/CardFriendNo/Online/OnLineApply_ChkSZ.vue'),
        meta: {
          title: '線上辦卡'
        }
      },
      // ? 非卡友-線上-共用
      {
        path: '/OnLineApply_Chk_OTP',
        name: '手機OTP驗證',
        component: () => import('../views/CardFriendNo/Online/Fillin/OnLineApply_Chk_OTP.vue'),
        meta: {
          title: '手機OTP驗證'
        }
      },
      {
        path: '/OnLineApply_ChkSZ_OTP',
        name: '手機OTP驗證(他行帳戶)',
        component: () => import('../views/CardFriendNo/Online/Fillin/OnLineApply_ChkSZ_OTP.vue'),
        meta: {
          title: '手機OTP驗證'
        }
      },
      {
        path: '/OnLineApply_Fillin_OT',
        name: '非卡友-申請書資料填寫',
        component: () => import('../views/CardFriendNo/Online/Fillin/OnLineApply_Fillin_OT.vue'),
        meta: {
          title: '申請書資料填寫'
        }
      },
      {
        path: '/OnLineApply_Fillin_OT_1',
        name: '非卡友-個資使用條款',
        component: () => import('../views/CardFriendNo/Online/Fillin/OnLineApply_Fillin_OT_1.vue'),
        meta: {
          title: '申請書資料填寫'
        }
      },
      {
        path: '/OnLineApply_Fillin_OT_2',
        name: '非卡友-確認填寫資料',
        component: () => import('../views/CardFriendNo/Online/Fillin/OnLineApply_Fillin_OT_2.vue'),
        meta: {
          title: '申請書資料填寫'
        }
      },
      {
        path: '/OnLineApply_Fillin_OT_Up',
        name: '非卡友-檢附財力證明',
        component: () => import('../views/CardFriendNo/Online/Fillin/OnLineApply_Fillin_OT_Up.vue'),
        meta: {
          title: '檢附財力證明'
        }
      },
      {
        path: '/dspApplicationNNB',
        name: '非卡友-NewNewBank',
        component: () => import('../views/CardFriendNo/Online/Fillin/dspApplicationNNB.vue'),
        meta: {
          title: 'NewNewBank'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior (to, from) {
    return {
      top: 0
    }
  },
  routes
})

export default router
