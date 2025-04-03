<template>
  <DashboardLayout>
    <h1>Bestellingen Beheer</h1>
    
    <div class="filter-section">
      <form class="filter-form">
        <div class="form-group">
          <label for="search">Zoeken</label>
          <input type="text" id="search" v-model="search" class="form-control" placeholder="Zoek op bestelnummer of klant">
        </div>
        
        <div class="form-group">
          <label for="status">Status</label>
          <select id="status" v-model="selectedStatus" class="form-control">
            <option value="">Alle statussen</option>
            <option value="pending">In behandeling</option>
            <option value="completed">Voltooid</option>
            <option value="cancelled">Geannuleerd</option>
          </select>
        </div>
        
        <div class="form-group">
          <label for="date">Datum</label>
          <input type="date" id="date" v-model="selectedDate" class="form-control">
        </div>
        
        <div class="form-group">
          <button type="button" @click="resetFilters" class="btn btn-secondary">Reset Filters</button>
        </div>
      </form>
    </div>
    
    <table class="data-table">
      <thead>
        <tr>
          <th>Bestelnummer</th>
          <th>Klant</th>
          <th>Datum</th>
          <th>Producten</th>
          <th>Totaal</th>
          <th>Status</th>
          <th>Acties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in filteredBestellingen" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.items }}</td>
          <td>&euro;{{ order.total.toFixed(2) }}</td>
          <td>
            <span class="status" :class="`status-${order.status}`">
              {{ getStatusText(order.status) }}
            </span>
          </td>
          <td>
            <div class="action-buttons">
              <button class="btn btn-primary" @click="viewOrderDetails(order.id)">Details</button>
              <button v-if="order.status === 'pending'" class="btn btn-secondary" @click="updateStatus(order.id, 'completed')">Voltooien</button>
              <button v-if="order.status === 'pending'" class="btn btn-danger" @click="updateStatus(order.id, 'cancelled')">Annuleren</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

export default {
  name: 'BestellingenPage',
  components: {
    DashboardLayout
  },
  data() {
    return {
      search: '',
      selectedStatus: '',
      selectedDate: '',
      bestellingen: [
        { id: 'ORD-2025-001', customer: 'Jan Jansen', date: '02-04-2025', items: '2 items', total: 15.90, status: 'pending' },
        { id: 'ORD-2025-002', customer: 'Marie de Vries', date: '02-04-2025', items: '1 item', total: 12.75, status: 'pending' },
        { id: 'ORD-2025-003', customer: 'Peter Bakker', date: '01-04-2025', items: '3 items', total: 24.70, status: 'completed' },
        { id: 'ORD-2025-004', customer: 'Sanne Visser', date: '01-04-2025', items: '1 item', total: 9.25, status: 'completed' },
        { id: 'ORD-2025-005', customer: 'Theo de Jong', date: '31-03-2025', items: '2 items', total: 17.45, status: 'cancelled' },
        { id: 'ORD-2025-006', customer: 'Laura Smit', date: '30-03-2025', items: '4 items', total: 35.65, status: 'completed' },
        { id: 'ORD-2025-007', customer: 'Kees van Dijk', date: '30-03-2025', items: '2 items', total: 19.20, status: 'pending' },
        { id: 'ORD-2025-008', customer: 'Anouk Meijer', date: '29-03-2025', items: '1 item', total: 8.95, status: 'completed' },
      ]
    }
  },
  computed: {
    filteredBestellingen() {
      return this.bestellingen.filter(order => {
        // Filter on search term
        const searchMatch = this.search === '' || 
          order.id.toLowerCase().includes(this.search.toLowerCase()) || 
          order.customer.toLowerCase().includes(this.search.toLowerCase());
          
        // Filter on status
        const statusMatch = this.selectedStatus === '' || order.status === this.selectedStatus;
        
        // Filter on date
        const dateMatch = this.selectedDate === '' || order.date === this.formatDate(this.selectedDate);
        
        return searchMatch && statusMatch && dateMatch;
      });
    }
  },
  methods: {
    resetFilters() {
      this.search = '';
      this.selectedStatus = '';
      this.selectedDate = '';
    },
    viewOrderDetails(id) {
      alert(`Details bekijken voor bestelling: ${id}`);
      // In a real application, you would navigate to an order details page
      // this.$router.push(`/dashboard/bestellingen/${id}`);
    },
    updateStatus(id, newStatus) {
      // In a real application, you would update the status via an API
      const index = this.bestellingen.findIndex(order => order.id === id);
      if (index !== -1) {
        this.bestellingen[index].status = newStatus;
        alert(`Status van bestelling ${id} is bijgewerkt naar ${this.getStatusText(newStatus)}`);
      }
    },
    getStatusText(status) {
      switch(status) {
        case 'pending': return 'In behandeling';
        case 'completed': return 'Voltooid';
        case 'cancelled': return 'Geannuleerd';
        default: return status;
      }
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
    }
  }
}
</script>