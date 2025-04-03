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
    path: '/registreren',
    name: 'Register',
    component: () => import('@/pages/RegisterPage.vue') // Lazy loading
  },
  {
    path: '/wachtwoord-vergeten',
    name: 'ForgotPassword',
    component: () => import('@/pages/ForgotPasswordPage.vue') // Lazy loading
  },
  // Dashboard routes
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/pages/dashboard/DashboardHome.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/medicatie',
    name: 'Medicatie',
    component: () => import('@/pages/dashboard/MedicatiePage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/voorraad',
    name: 'Voorraad',
    component: () => import('@/pages/dashboard/VoorraadPage.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/bestellingen',
    name: 'Bestellingen',
    component: () => import('@/pages/dashboard/BestellingenPage.vue'),
    meta: { requiresAuth: true }
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

// Navigation guard (for future authentication implementation)
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  // In a real application, check if user is authenticated
  // const isAuthenticated = localStorage.getItem('user-token') !== null;
  const isAuthenticated = true; // For now, always allow access to dashboard
  
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router