import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/danhmuakhachhang',
    name: 'danhmuckhachhang',
    component: () => import('../views/danh-muc-khach-hang')
  },
  {
    path: '/',
    name: 'danhmucsanpham',
    component: () => import('../views/danh-muc-san-pham')
  },
  {
    path: '/muahang',
    name: 'muahang',
    component: () => import('../views/mua-hang')
  },
  {
    path: '/thietlap',
    name: 'thietlap',
    component: () => import('../views/thiet-lap')
  },
  {
    path: '/tongquan',
    name: 'tongquan',
    component: () => import('../views/tong-quan')
  },
  {
    path: '/baocao',
    name: 'baocao',
    component: () => import('../views/bao-cao')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
