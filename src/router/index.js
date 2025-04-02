import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/AboutPage.vue') // Lazy loading
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/pages/servicesPage.vue') // Fixed: lowercase 's' to match actual filename
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/pages/ProductsPage.vue') // Lazy loading
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/ContactPage.vue') // Lazy loading
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/LoginPage.vue') // Lazy loading
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/pages/RegisterPage.vue') // Lazy loading
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top when navigating to a new page
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router