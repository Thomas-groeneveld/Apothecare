<template>
  <div class="admin-layout">
    <header class="admin-header">
      <div class="container">
        <div class="header-content">
          <router-link to="/admin" class="logo">
            <img src="@/assets/logo.png" alt="Apothecare" />
          </router-link>
          <nav class="admin-nav">
            <router-link to="/admin/products" class="nav-link">
              <font-awesome-icon :icon="['fas', 'pills']" />
              Producten
            </router-link>
            <router-link to="/admin/orders" class="nav-link">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
              Bestellingen
            </router-link>
            <router-link to="/admin/restock" class="nav-link">
              <font-awesome-icon :icon="['fas', 'boxes']" />
              Voorraad
            </router-link>
          </nav>
          <div class="admin-actions-right">
            <span class="admin-user">
              <font-awesome-icon :icon="['fas', 'user']" />
              Admin
            </span>
            <button class="btn logout" @click="handleLogout">
              <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
              Uitloggen
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="admin-main">
      <slot></slot>
    </main>

    <footer class="admin-footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; {{ currentYear }} Apothecare - Admin Portal</p>
          <nav class="footer-nav">
            <a href="#" class="footer-link">Privacy</a>
            <a href="#" class="footer-link">Terms</a>
            <a href="#" class="footer-link">Support</a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'AdminLayout',
  components: {
    FontAwesomeIcon
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    handleLogout() {
      // Implement logout functionality
      this.$router.push('/login');
    }
  }
}
</script> 