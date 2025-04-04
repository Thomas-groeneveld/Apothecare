<template>
  <AdminLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Beheer</span>
          <h1>Admin Dashboard</h1>
          <div class="separator"></div>
        </div>

        <div class="admin-grid">
          <!-- Products Management Card -->
          <div class="admin-card">
            <div class="admin-card-icon">
              <font-awesome-icon :icon="['fas', 'pills']" />
            </div>
            <h3>Productbeheer</h3>
            <p>Beheer het medicijnassortiment, prijzen en voorraad.</p>
            <router-link to="/admin/products" class="btn primary">Beheren</router-link>
          </div>

          <!-- Orders Management Card -->
          <div class="admin-card">
            <div class="admin-card-icon">
              <font-awesome-icon :icon="['fas', 'shopping-cart']" />
            </div>
            <h3>Bestellingenbeheer</h3>
            <p>Bekijk en beheer alle bestellingen.</p>
            <router-link to="/admin/orders" class="btn primary">Beheren</router-link>
          </div>

          <!-- Restock Management Card -->
          <div class="admin-card">
            <div class="admin-card-icon">
              <font-awesome-icon :icon="['fas', 'boxes']" />
            </div>
            <h3>Voorraad Bijbestellen</h3>
            <p>Bekijk en bestel medicijnen die bijna op zijn.</p>
            <router-link to="/admin/restock" class="btn primary">Bijbestellen</router-link>
          </div>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'AdminPage',
  components: {
    AdminLayout,
    FontAwesomeIcon
  }
}
</script> 