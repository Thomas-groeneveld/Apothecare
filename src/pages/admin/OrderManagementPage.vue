<template>
  <AdminLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Beheer</span>
          <h1>Bestellingenbeheer</h1>
          <div class="separator"></div>
        </div>

        <div class="orders-filter">
          <select v-model="filterStatus">
            <option value="all">Alle bestellingen</option>
            <option value="pending">In behandeling</option>
            <option value="processing">In verwerking</option>
            <option value="completed">Afgerond</option>
          </select>
        </div>

        <div class="orders-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Klant</th>
                <th>Datum</th>
                <th>Status</th>
                <th>Totaal</th>
                <th>Acties</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in filteredOrders" :key="order.id">
                <td>#{{ order.id }}</td>
                <td>{{ order.customerName }}</td>
                <td>{{ formatDate(order.date) }}</td>
                <td>
                  <span :class="['status-badge', order.status]">
                    {{ order.status }}
                  </span>
                </td>
                <td>€{{ order.total.toFixed(2) }}</td>
                <td>
                  <button class="btn icon" @click="viewOrder(order.id)">
                    <font-awesome-icon :icon="['fas', 'eye']" />
                  </button>
                  <button class="btn icon primary" @click="updateStatus(order.id)">
                    <font-awesome-icon :icon="['fas', 'check']" />
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
  name: 'OrderManagementPage',
  components: {
    AdminLayout
  },
  data() {
    return {
      orders: [], // Will be populated from database
      filterStatus: 'all'
    }
  },
  async created() {
    // Future database integration
    // await this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      // Future API call to get orders
      // this.orders = await orderService.getAll();
    },
    async updateOrderStatus(orderId, newStatus) {
      // Basic implementation until database is connected
      console.log(`Updating order ${orderId} to status: ${newStatus}`);
      const order = this.orders.find(o => o.id === orderId);
      if (order) {
        order.status = newStatus;
      }
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('nl-NL');
    },
    viewOrder(id) {
      // Basic implementation
      console.log('Viewing order:', id);
      // TODO: Implement order detail view
    },
    updateStatus(id) {
      // Basic implementation
      console.log('Updating status for order:', id);
      const order = this.orders.find(o => o.id === id);
      if (order) {
        // Cycle through statuses: pending -> processing -> completed
        const statusMap = {
          'pending': 'processing',
          'processing': 'completed',
          'completed': 'pending'
        };
        order.status = statusMap[order.status] || 'pending';
      }
      // TODO: Add API call to update status
    }
  }
}
</script> 