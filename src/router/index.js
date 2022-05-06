import { createRouter, createWebHistory } from 'vue-router'

//----------------------------------------------------------------------------------------------
import Login from '../views/login.vue'
import profile from '../views/profile.vue'
//----------------------------------------------------------------------------------------------
import home from '../views/customer/home.vue'
import product from '../views/customer/product.vue'
import purchase from '../views/customer/purchase.vue'
import payment from '../views/customer/payment.vue'
//----------------------------------------------------------------------------------------------
import orderEmployee from '../views/employee/order.vue'
import inventory from '../views/employee/inventory.vue'
//----------------------------------------------------------------------------------------------
import adminInventory from '../views/admin/adminInventory.vue'
import adminEmployee from '../views/admin/adminEmployee.vue'
import adminDessert from '../views/admin/adminDessert.vue'
import AdminBuyinventory from '../views/admin/adminBuyinventory.vue'


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/product/:id',
    name: 'product',
    component: product
  },
  {
    path: '/purchase',
    name: 'purchase',
    component: purchase
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment
  },
  //----------------------------------------------------------------------------------------------
  {
    path: '/employee/order',
    name: 'orderEmployee',
    component: orderEmployee
  },
  {
    path: '/employee/inventory',
    name: 'inventory',
    component: inventory
  },
  //----------------------------------------------------------------------------------------------
  {
    path: '/admin/Admininventory',
    name: 'adminInventory',
    component: adminInventory
  },
  {
    path: '/admin/Adminemployee',
    name: 'adminEmployee',
    component: adminEmployee
  },
  {
    path: '/admin/Admindessert',
    name: 'adminDessert',
    component: adminDessert
  },
  {
    path: '/admin/Adminbuyinventory',
    name: 'AdminBuyinventory',
    component: AdminBuyinventory
  },
  
//---------------------------------------------------------------------------------------------------------------

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
