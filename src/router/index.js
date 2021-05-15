import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Danhmucnhanvien',
    component: () => import(/* webpackChunkName: "about" */ '../views/danhmucnhanvien.vue')
  },
  {
    path: '/hethong',
    name: 'Hethong',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hethong.vue')
  },
  {
    path: '/baocao',
    name: 'Baocao',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/baocao.vue')
  },
  {
    path: '/muahang',
    name: 'Muahang',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/muahang.vue')
  },
  {
    path: '/danhmuckhachhang',
    name: 'Danhmuckhachhang',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/danhmuckhachhang.vue')
  },
  {
    path: '/tongquan',
    name: 'Tongquan',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/tongquan.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
