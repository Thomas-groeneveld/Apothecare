<template>
  <AdminLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Beheer</span>
          <h1>Productbeheer</h1>
          <div class="separator"></div>
        </div>

        <div class="admin-actions">
          <button class="btn primary" @click="showAddProductModal = true">
            <font-awesome-icon :icon="['fas', 'plus']" /> Nieuw Product
          </button>
        </div>

        <div class="products-table">
          <table>
            <thead>
              <tr>
                <th>Naam</th>
                <th>Voorraad</th>
                <th>Prijs</th>
                <th>Status</th>
                <th>Acties</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>{{ product.name }}</td>
                <td>{{ product.stock }}</td>
                <td>€{{ product.price.toFixed(2) }}</td>
                <td>
                  <span :class="['status-badge', product.status]">
                    {{ product.status }}
                  </span>
                </td>
                <td>
                  <button class="btn icon" @click="editProduct(product)">
                    <font-awesome-icon :icon="['fas', 'edit']" />
                  </button>
                  <button class="btn icon danger" @click="deleteProduct(product.id)">
                    <font-awesome-icon :icon="['fas', 'trash']" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';

export default {
  name: 'ProductManagementPage',
  components: {
    AdminLayout
  },
  data() {
    return {
      products: [],
      showAddProductModal: false
    }
  },
  async created() {
    // Future database integration
    // await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      // Future API call to get products
      // this.products = await productService.getAll();
    },
    async editProduct(product) {
      // Basic implementation until database is connected
      console.log('Editing product:', product);
      // You can add edit logic here later
    },
    async deleteProduct(id) {
      // Basic implementation until database is connected
      console.log('Deleting product:', id);
      this.products = this.products.filter(product => product.id !== id);
    }
  }
}
</script> 