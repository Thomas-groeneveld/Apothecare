<template>
  <DashboardLayout>
    <h1>Medicatie Overzicht</h1>
    
    <div class="filter-section">
      <form class="filter-form">
        <div class="form-group">
          <label for="search">Zoeken</label>
          <input type="text" id="search" v-model="search" class="form-control" placeholder="Zoek op naam of categorie">
        </div>
        
        <div class="form-group">
          <label for="category">Categorie</label>
          <select id="category" v-model="selectedCategory" class="form-control">
            <option value="">Alle categorieën</option>
            <option value="Pijnstiller">Pijnstiller</option>
            <option value="Antibiotica">Antibiotica</option>
            <option value="Allergie">Allergie</option>
            <option value="Vitamines">Vitamines</option>
            <option value="Slaapmiddel">Slaapmiddel</option>
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
          <th>Categorie</th>
          <th>Beschrijving</th>
          <th>Dosering</th>
          <th>Prijs</th>
          <th>Acties</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="med in filteredMedicatie" :key="med.id">
          <td>{{ med.id }}</td>
          <td>{{ med.name }}</td>
          <td>{{ med.category }}</td>
          <td>{{ med.description }}</td>
          <td>{{ med.dosage }}</td>
          <td>&euro;{{ med.price.toFixed(2) }}</td>
          <td>
            <div class="action-buttons">
              <button class="btn btn-primary" @click="viewDetails(med.id)">Details</button>
              <button class="btn btn-secondary" @click="editMedicine(med.id)">Bewerken</button>
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
  name: 'MedicatiePage',
  components: {
    DashboardLayout
  },
  data() {
    return {
      search: '',
      selectedCategory: '',
      medicatie: [
        { id: 1, name: 'Paracetamol', category: 'Pijnstiller', description: 'Voor hoofdpijn en koorts', dosage: '500mg tablet', price: 5.95 },
        { id: 2, name: 'Ibuprofen', category: 'Pijnstiller', description: 'Ontstekingsremmend middel', dosage: '400mg tablet', price: 7.50 },
        { id: 3, name: 'Amoxicilline', category: 'Antibiotica', description: 'Voor bacteriële infecties', dosage: '500mg capsule', price: 12.75 },
        { id: 4, name: 'Loratadine', category: 'Allergie', description: 'Antihistamine voor allergieën', dosage: '10mg tablet', price: 9.25 },
        { id: 5, name: 'Vitamine D', category: 'Vitamines', description: 'Supplement voor botgezondheid', dosage: '10mcg tablet', price: 6.50 },
        { id: 6, name: 'Melatonine', category: 'Slaapmiddel', description: 'Helpt bij inslaapproblemen', dosage: '3mg tablet', price: 8.95 },
        { id: 7, name: 'Diclofenac', category: 'Pijnstiller', description: 'Voor gewrichtspijn', dosage: '50mg tablet', price: 10.25 },
        { id: 8, name: 'Cetirizine', category: 'Allergie', description: 'Voor seizoensgebonden allergieën', dosage: '10mg tablet', price: 8.35 },
      ]
    }
  },
  computed: {
    filteredMedicatie() {
      return this.medicatie.filter(med => {
        // Filter on search term
        const searchMatch = this.search === '' || 
          med.name.toLowerCase().includes(this.search.toLowerCase()) || 
          med.category.toLowerCase().includes(this.search.toLowerCase()) ||
          med.description.toLowerCase().includes(this.search.toLowerCase());
          
        // Filter on category
        const categoryMatch = this.selectedCategory === '' || med.category === this.selectedCategory;
        
        return searchMatch && categoryMatch;
      });
    }
  },
  methods: {
    resetFilters() {
      this.search = '';
      this.selectedCategory = '';
    },
    viewDetails(id) {
      alert(`Details bekijken voor medicatie met ID: ${id}`);
      // In a real application, you would navigate to a details page or open a modal
      // this.$router.push(`/dashboard/medicatie/${id}`);
    },
    editMedicine(id) {
      alert(`Medicatie bewerken met ID: ${id}`);
      // In a real application, you would navigate to an edit page or open a modal
      // this.$router.push(`/dashboard/medicatie/edit/${id}`);
    }
  }
}
</script>