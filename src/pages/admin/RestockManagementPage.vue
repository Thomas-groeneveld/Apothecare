<template>
  <AdminLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Beheer</span>
          <h1>Voorraad Bijbestellen</h1>
          <div class="separator"></div>
        </div>

        <div class="alert-section" v-if="lowStockItems.length > 0">
          <div class="alert warning">
            <font-awesome-icon :icon="['fas', 'exclamation-triangle']" />
            Er zijn {{ lowStockItems.length }} producten die bijna op zijn.
          </div>
        </div>

        <div class="restock-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Huidige Voorraad</th>
                <th>Minimum Voorraad</th>
                <th>Bijbestel Aantal</th>
                <th>Acties</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in lowStockItems" :key="item.id">
                <td>{{ item.name }}</td>
                <td>
                  <span :class="{ 'text-danger': item.stock <= item.minStock }">
                    {{ item.stock }}
                  </span>
                </td>
                <td>{{ item.minStock }}</td>
                <td>
                  <input 
                    type="number" 
                    v-model="item.orderAmount" 
                    min="1"
                    class="restock-input"
                  >
                </td>
                <td>
                  <button class="btn primary" @click="placeOrder(item)">
                    Bestellen
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="pending-orders" v-if="pendingOrders.length > 0">
          <h2>Lopende Bestellingen</h2>
          <div class="orders-list">
            <div v-for="order in pendingOrders" :key="order.id" class="order-item">
              <span>{{ order.product }}</span>
              <span>Aantal: {{ order.amount }}</span>
              <span>Status: {{ order.status }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';

export default {
  name: 'RestockManagementPage',
  components: {
    AdminLayout
  },
  data() {
    return {
      lowStockItems: [], // Will be populated from database
      pendingOrders: [] // Will be populated from database
    }
  },
  async created() {
    // Future database integration
    // await this.fetchLowStockItems();
    // await this.fetchPendingOrders();
  },
  methods: {
    async fetchLowStockItems() {
      // Future API call to get low stock items
      // this.lowStockItems = await inventoryService.getLowStockItems();
    },
    async fetchPendingOrders() {
      // Future API call to get pending restock orders
      // this.pendingOrders = await restockService.getPendingOrders();
    },
    async placeOrder(item) {
      // Basic implementation until database is connected
      console.log('Placing order for:', item);
      const order = {
        id: Date.now(), // Temporary ID generation
        product: item.name,
        amount: item.orderAmount,
        status: 'pending'
      };
      this.pendingOrders.push(order);
    }
  }
}
</script> 