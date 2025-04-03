<template>
  <DashboardLayout>
    <h1>Voorraad Beheer</h1>
    
    <div class="filter-section">
      <form class="filter-form">
        <div class="form-group">
          <label for="search">Zoeken</label>
          <input type="text" id="search" v-model="search" class="form-control" placeholder="Zoek op naam of ID">
        </div>
        
        <div class="form-group">
          <label for="status">Voorraadstatus</label>
          <select id="status" v-model="selectedStatus" class="form-control">
            <option value="">Alle statussen</option>
            <option value="in-stock">Op voorraad</option>
            <option value="low">Bijna op</option>
            <option value="out-of-stock">Niet op voorraad</option>
          </select>
        </div>
        
        <div class="form-group">
          <button type="button" @click="resetFilters" class="btn btn-secondary">Reset Filters</button>
        </div>
      </form>
    </div>
    
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Naam</th>
          <th>Hoeveelheid</th>
          <th>Status</th>
          <th>Minimale voorraad</th>
          <th>Laatste update</th>
          <th>Acties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredVoorraad" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <span class="status" :class="`status-${item.status}`">
              {{ getStatusText(item.status) }}
            </span>
          </td>
          <td>{{ item.minStock }}</td>
          <td>{{ item.lastUpdated }}</td>
          <td>
            <div class="action-buttons">
              <button class="btn btn-primary" @click="updateStock(item.id)">Bijwerken</button>
              <button class="btn btn-secondary" @click="orderMore(item.id)" :disabled="item.status !== 'low' && item.status !== 'out-of-stock'">Bestellen</button>
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
  name: 'VoorraadPage',
  components: {
    DashboardLayout
  },
  data() {
    return {
      search: '',
      selectedStatus: '',
      voorraad: [
        { id: 1, name: 'Paracetamol', quantity: 150, status: 'in-stock', minStock: 50, lastUpdated: '02-04-2025' },
        { id: 2, name: 'Ibuprofen', quantity: 85, status: 'in-stock', minStock: 75, lastUpdated: '01-04-2025' },
        { id: 3, name: 'Amoxicilline', quantity: 35, status: 'low', minStock: 40, lastUpdated: '30-03-2025' },
        { id: 4, name: 'Loratadine', quantity: 0, status: 'out-of-stock', minStock: 30, lastUpdated: '28-03-2025' },
        { id: 5, name: 'Vitamine D', quantity: 200, status: 'in-stock', minStock: 50, lastUpdated: '02-04-2025' },
        { id: 6, name: 'Melatonine', quantity: 25, status: 'low', minStock: 30, lastUpdated: '01-04-2025' },
        { id: 7, name: 'Diclofenac', quantity: 100, status: 'in-stock', minStock: 40, lastUpdated: '01-04-2025' },
        { id: 8, name: 'Cetirizine', quantity: 50, status: 'in-stock', minStock: 30, lastUpdated: '31-03-2025' },
      ]
    }
  },
  computed: {
    filteredVoorraad() {
      return this.voorraad.filter(item => {
        // Filter on search term
        const searchMatch = this.search === '' || 
          item.name.toLowerCase().includes(this.search.toLowerCase()) || 
          item.id.toString().includes(this.search);
          
        // Filter on status
        const statusMatch = this.selectedStatus === '' || item.status === this.selectedStatus;
        
        return searchMatch && statusMatch;
      });
    }
  },
  methods: {
    resetFilters() {
      this.search = '';
      this.selectedStatus = '';
    },
    updateStock(id) {
      alert(`Voorraad bijwerken voor product met ID: ${id}`);
      // In a real application, you would open a modal to update the stock
    },
    orderMore(id) {
      alert(`Meer bestellen van product met ID: ${id}`);
      // In a real application, you would redirect to a form to place an order
    },
    getStatusText(status) {
      switch(status) {
        case 'in-stock': return 'Op voorraad';
        case 'low': return 'Bijna op';
        case 'out-of-stock': return 'Niet op voorraad';
        default: return status;
      }
    }
  }
}
</script>