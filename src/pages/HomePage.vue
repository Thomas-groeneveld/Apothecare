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

    <!-- Products Section -->
    <section id="products-preview" class="products-preview">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Onze Producten</span>
          <h2>Uitgelichte Gezondheidsoplossingen</h2>
          <div class="separator"></div>
        </div>
        <div class="product-slider">
          <div class="product-card">
            <div class="product-badge">Nieuw</div>
            <div class="product-image">
              <img src="@/assets/products/product1.jpg" alt="Product 1">
            </div>
            <div class="product-details">
              <h3>Immuunsysteem Complex</h3>
              <p>Complete vitamine- en mineralensupplement</p>
              <div class="product-price">€24,99</div>
              <router-link to="/products" class="btn primary">Bekijk Details</router-link>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <img src="@/assets/products/product2.jpg" alt="Product 2">
            </div>
            <div class="product-details">
              <h3>Geavanceerde Pijnverlichting</h3>
              <p>Snelwerkende formule voor pijnbestrijding</p>
              <div class="product-price">€12,99</div>
              <router-link to="/products" class="btn primary">Bekijk Details</router-link>
            </div>
          </div>
          <div class="product-card">
            <div class="product-badge">Populair</div>
            <div class="product-image">
              <img src="@/assets/products/product3.jpg" alt="Product 3">
            </div>
            <div class="product-details">
              <h3>Slaap & Ontspanning</h3>
              <p>Natuurlijke formule voor betere slaapkwaliteit</p>
              <div class="product-price">€18,99</div>
              <router-link to="/products" class="btn primary">Bekijk Details</router-link>
            </div>
          </div>
          <div class="product-card">
            <div class="product-image">
              <img src="@/assets/products/product4.jpg" alt="Product 4">
            </div>
            <div class="product-details">
              <h3>Complete EHBO-kit</h3>
              <p>Essentiële benodigdheden voor noodgevallen</p>
              <div class="product-price">€34,99</div>
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

export default {
  name: 'HomePage',
  components: {
    DefaultLayout,
    FontAwesomeIcon
  }
}
</script>