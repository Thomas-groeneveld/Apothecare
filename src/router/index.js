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
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/pages/admin/AdminPage.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/products',
    name: 'ProductManagement',
    component: () => import('@/pages/admin/ProductManagementPage.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/orders',
    name: 'OrderManagement',
    component: () => import('@/pages/admin/OrderManagementPage.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/restock',
    name: 'RestockManagement',
    component: () => import('@/pages/admin/RestockManagementPage.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
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
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);
  
  // In a real application, these should check your authentication system
  const isAuthenticated = true; // Replace with real auth check
  const isAdmin = true; // Replace with real admin check
  
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else if (requiresAdmin && !isAdmin) {
    next('/dashboard'); // Redirect non-admins to regular dashboard
  } else {
    next();
  }
});

export default router