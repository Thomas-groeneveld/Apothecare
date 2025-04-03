<template>
  <DefaultLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Producten</span>
          <h1>Onze Producten</h1>
          <div class="separator"></div>
          <p class="intro-text">Ontdek ons uitgebreide assortiment farmaceutische producten en gezondheidsoplossingen die met zorg zijn samengesteld voor uw welzijn.</p>
        </div>

        <!-- Categorieën navigatie -->
        <div class="product-categories">
          <button 
            v-for="category in categories" 
            :key="category" 
            @click="filterProductsByCategory(category)"
            :class="{ 'active': activeCategory === category }"
          >
            {{ category }}
          </button>
        </div>

        <!-- Loading indicator -->
        <div v-if="loading" class="loading-container">
          <div class="loading-spinner"></div>
          <p>Producten laden...</p>
        </div>

        <!-- Error message -->
        <div v-else-if="error" class="error-message">
          <p>{{ error }}</p>
          <button @click="fetchProducts" class="btn primary">Opnieuw proberen</button>
        </div>

        <!-- Producten lijst -->
        <div v-else class="products-grid">
          <div class="product-card" v-for="product in filteredProducts" :key="product.id">
            <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
            <div class="product-image">
              <img :src="product.image" :alt="product.name">
            </div>
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-price">{{ product.price }}</div>
              <button class="btn primary">Bekijk Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { ProductService } from '@/services/api';

export default {
  name: 'ProductsPage',
  components: {
    DefaultLayout
  },
  data() {
    return {
      activeCategory: 'Alle Producten',
      categories: ['Alle Producten', 'Supplementen', 'Persoonlijke Verzorging', 'Eerste Hulp', 'Medicijnen'],
      products: [],
      loading: true,
      error: null
    }
  },
  computed: {
    filteredProducts() {
      if (this.activeCategory === 'Alle Producten') {
        return this.products;
      } else {
        return this.products.filter(product => product.category === this.activeCategory);
      }
    }
  },
  created() {
    // Fetch products when component is created
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      // Reset state
      this.loading = true;
      this.error = null;
      
      try {
        // Get products from API service
        this.products = await ProductService.getAllProducts();
        this.loading = false;
      } catch (err) {
        this.error = "Er is een fout opgetreden bij het laden van de producten. Probeer het later opnieuw.";
        this.loading = false;
        console.error("Error fetching products:", err);
      }
    },
    
    async filterProductsByCategory(category) {
      this.activeCategory = category;
      this.loading = true;
      
      try {
        // When you have a real backend, uncomment this to load products by category from API
        // this.products = await ProductService.getProductsByCategory(category);
        
        // For now, we'll just use the client-side filtering through the computed property
        this.loading = false;
      } catch (err) {
        this.error = "Er is een fout opgetreden bij het filteren van producten.";
        this.loading = false;
        console.error("Error filtering products:", err);
      }
    }
  }
}
</script>

<style>
.intro-text {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;
}

.product-categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
}

.product-categories button {
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 10px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 600;
}

.product-categories button.active,
.product-categories button:hover {
  background-color: var(--primary-color);
  color: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.product-card {
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
  height: 450px;
  position: relative;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.product-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--accent-color);
  color: var(--white);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.product-details {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.product-details h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--primary-dark);
}

.product-details p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 15px;
  flex-grow: 1;
}

.product-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.product-details .btn {
  align-self: center;
  width: 100%;
}

/* Loading and error styles */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(13, 138, 83, 0.1);
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  text-align: center;
  padding: 50px 0;
}

.error-message p {
  color: #e74c3c;
  font-size: 1.1rem;
  margin-bottom: 20px;
}
</style>