<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <section id="hero" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Uw Gezondheid is Onze Prioriteit</h1>
          <p>Innovatieve farmaceutische oplossingen met zorg en expertise</p>
          <div class="hero-buttons">
            <router-link to="/services" class="btn primary">Onze Diensten</router-link>
            <router-link to="/contact" class="btn secondary">Contact</router-link>
          </div>
        </div>
        <div class="hero-image">
          <img src="@/assets/hero-image.jpg" alt="Farmaceutische professionals">
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'check']" />
            </div>
            <h3>Kwaliteitsproducten</h3>
            <p>Farmaceutische producten van de hoogste kwaliteit die voldoen aan alle wettelijke normen</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'flask']" />
            </div>
            <h3>Deskundig Advies</h3>
            <p>Professioneel farmaceutisch advies van ons team van gekwalificeerde experts</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <font-awesome-icon :icon="['fas', 'truck']" />
            </div>
            <h3>Snelle Bezorging</h3>
            <p>Snelle en betrouwbare bezorging van medicijnen aan huis</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about-preview" class="about-preview">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Over Ons</span>
          <h2>Uitstekende Gezondheidszorg Sinds 2005</h2>
          <div class="separator"></div>
        </div>
        <div class="about-content">
          <div class="about-image">
            <img src="@/assets/about-image.jpg" alt="Onze Apotheek">
          </div>
          <div class="about-text">
            <p class="highlight">Apothecare is een toonaangevend farmaceutisch bedrijf dat zich richt op het verbeteren van gezondheidsresultaten door innovatieve medicijnen en persoonlijke zorg.</p>
            <p>Met meer dan 15 jaar ervaring in de farmaceutische industrie hebben we een reputatie opgebouwd voor het leveren van hoogwaardige medicijnen, deskundig gezondheidsadvies en uitzonderlijke klantenservice.</p>
            <div class="stats">
              <div class="stat-item">
                <h4>15+</h4>
                <p>Jaar Ervaring</p>
              </div>
              <div class="stat-item">
                <h4>5000+</h4>
                <p>Tevreden Klanten</p>
              </div>
              <div class="stat-item">
                <h4>100+</h4>
                <p>Gezondheidsproducten</p>
              </div>
            </div>
            <router-link to="/about" class="btn secondary">Meer Over Ons</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services-preview" class="services-preview">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Onze Diensten</span>
          <h2>Uitgebreide Farmaceutische Zorg</h2>
          <div class="separator"></div>
        </div>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'prescription-bottle-medical']" />
            </div>
            <h3>Receptdiensten</h3>
            <p>Snel en nauwkeurig verstrekken van recepten met professioneel advies</p>
            <router-link to="/services" class="service-link">Meer Informatie</router-link>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'user-doctor']" />
            </div>
            <h3>Gezondheidsconsulten</h3>
            <p>Persoonlijke consultaties met onze zorgprofessionals</p>
            <router-link to="/services" class="service-link">Meer Informatie</router-link>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'truck']" />
            </div>
            <h3>Thuisbezorging</h3>
            <p>Ontvang uw medicijnen direct aan huis geleverd</p>
            <router-link to="/services" class="service-link">Meer Informatie</router-link>
          </div>
          <div class="service-card">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'vials']" />
            </div>
            <h3>Gezondheidstests</h3>
            <p>Diverse gezondheidstests waaronder bloeddruk- en glucosemonitoring</p>
            <router-link to="/services" class="service-link">Meer Informatie</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Wat Klanten Zeggen</span>
          <h2>Klantervaringen</h2>
          <div class="separator"></div>
        </div>
        <div class="testimonials-slider">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial-content">
              <div class="quote">
                <font-awesome-icon :icon="['fas', 'quote-left']" />
              </div>
              <p>{{ testimonial.text }}</p>
              <div class="testimonial-rating">
                <font-awesome-icon :icon="['fas', 'star']" v-for="star in 5" :key="star" />
              </div>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.image" :alt="testimonial.name">
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products-preview" class="products-preview">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Onze Producten</span>
          <h2>Uitgelichte Gezondheidsoplossingen</h2>
          <div class="separator"></div>
        </div>
        <div class="product-slider">
          <div class="product-card" v-for="product in featuredProducts" :key="product.id">
            <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
            <div class="product-image">
              <img :src="product.image" :alt="product.name">
            </div>
            <div class="product-details">
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              <div class="product-price">{{ product.price }}</div>
              <router-link to="/products" class="btn primary">Bekijk Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-content">
          <h2>Blijf op de Hoogte met Apothecare</h2>
          <p>Abonneer u op onze nieuwsbrief voor gezondheidstips, productupdates en exclusieve aanbiedingen</p>
          <form class="newsletter-form">
            <input type="email" placeholder="Uw E-mailadres" required>
            <button type="submit" class="btn primary">Abonneren</button>
          </form>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ProductService, TestimonialService } from '@/services/api';

export default {
  name: 'HomePage',
  components: {
    DefaultLayout,
    FontAwesomeIcon
  },
  data() {
    return {
      testimonials: [],
      featuredProducts: [],
      loading: {
        testimonials: true,
        products: true
      },
      error: {
        testimonials: null,
        products: null
      }
    }
  },
  created() {
    // Fetch data when component is created
    this.fetchTestimonials();
    this.fetchFeaturedProducts();
  },
  methods: {
    async fetchTestimonials() {
      try {
        this.testimonials = await TestimonialService.getTestimonials();
        this.loading.testimonials = false;
      } catch (err) {
        console.error('Error loading testimonials:', err);
        this.error.testimonials = 'Kon getuigenissen niet laden';
        this.loading.testimonials = false;
      }
    },
    
    async fetchFeaturedProducts() {
      try {
        this.featuredProducts = await ProductService.getFeaturedProducts();
        this.loading.products = false;
      } catch (err) {
        console.error('Error loading featured products:', err);
        this.error.products = 'Kon uitgelichte producten niet laden';
        this.loading.products = false;
      }
    }
  }
}
</script>

<style>
/* Testimonials Section Styling */
.testimonials {
  background-color: var(--bg-light);
  position: relative;
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background-color: var(--white);
  border-radius: var(--border-radius);
  padding: 30px;
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.testimonial-card:hover {
  transform: translateY(-10px);
}

.testimonial-content {
  margin-bottom: 25px;
  position: relative;
}

.quote {
  color: var(--primary-color);
  font-size: 1.5rem;
  opacity: 0.5;
  margin-bottom: 15px;
}

.testimonial-content p {
  color: var(--text-light);
  font-style: italic;
  line-height: 1.7;
}

.testimonial-rating {
  color: #f49e4c;
  font-size: 1rem;
  margin-top: 15px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: 20px;
}

.testimonial-author img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
}

.author-info h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: var(--primary-dark);
}

.author-info p {
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: 0;
}

@media (max-width: 992px) {
  .testimonials-slider {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>