export const routes = [
  {
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
    path: '/calculator',
    name: '計算機',
    meta: {
      id: 'calculator',
      icon: ['fas', 'calculator'],
      iconType: 'fa'
    },
    component: () => import('@/pages/Calculator')
  }
]
