const routesList = [
  {
    show: true,
    active: true,
    path: '/',
    name: '首頁',
    meta: {
      id: 'home',
      icon: 'home-outline',
      iconType: 'ion'
    },
    component: () => import('@/pages/Home')
  },
  {
    show: false,
    active: false,
    path: '/about',
    name: '關於這個地方',
    meta: {
      id: 'about',
      icon: 'egg-outline',
      iconType: 'ion'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/pages/About')
  },
  {
    show: false,
    active: false,
    path: '/component-library',
    name: '元件館',
    meta: {
      id: 'component-library',
      icon: 'library-outline',
      iconType: 'ion'
    },
    component: () => import('@/pages/ComponentLibrary')
  },
  {
    show: false,
    active: false,
    path: '/calculator',
    name: '計算機',
    meta: {
      id: 'calculator',
      icon: ['fas', 'calculator'],
      iconType: 'fa'
    },
    component: () => import('@/pages/Calculator')
  },
  {
    show: false,
    active: false,
    path: '/lab',
    name: '實驗室',
    meta: {
      id: 'lab',
      icon: ['fas', 'flask'],
      iconType: 'fa'
    },
    component: () => import('@/pages/Lab')
  },
  {
    show: true,
    active: true,
    path: '/pokedex',
    name: '寶可夢-圖鑑',
    meta: {
      id: 'lab',
      icon: ['fas', 'book'],
      iconType: 'fa'
    },
    component: () => import('@/pages/Pokedex')
  },
  {
    show: false,
    active: true,
    path: '*',
    name: '404',
    meta: {
      id: 'lab',
      icon: ['fas', 'question'],
      iconType: 'fa'
    },
    component: () => import('@/pages/NotFoundPage.vue')
  }
]
export const routes = routesList.filter(({ active }) => active)
