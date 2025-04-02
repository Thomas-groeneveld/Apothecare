<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-about">
          <img src="@/assets/logo-white.png" alt="Apothecare Logo" class="footer-logo">
          <p>Apothecare is toegewijd aan het leveren van hoogwaardige farmaceutische zorg en gezondheidsproducten om het welzijn van onze gemeenschap te verbeteren.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <font-awesome-icon :icon="['fab', 'facebook-f']" />
            </a>
            <a href="#" aria-label="Twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </a>
            <a href="#" aria-label="Instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </div>
        </div>
        <div class="footer-links">
          <h3>Snelle Links</h3>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">Over Ons</router-link></li>
            <li><router-link to="/services">Diensten</router-link></li>
            <li><router-link to="/products">Producten</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h3>Diensten</h3>
          <ul>
            <li><router-link to="/services">Receptdiensten</router-link></li>
            <li><router-link to="/services">Gezondheidsconsulten</router-link></li>
            <li><router-link to="/services">Thuisbezorging</router-link></li>
            <li><router-link to="/services">Gezondheidstests</router-link></li>
          </ul>
        </div>
        <div class="footer-links">
          <h3>Openingstijden</h3>
          <ul class="hours-list">
            <li><span>Maandag - Vrijdag:</span> 8:00 - 20:00</li>
            <li><span>Zaterdag:</span> 9:00 - 18:00</li>
            <li><span>Zondag:</span> 10:00 - 16:00</li>
            <li><span>Feestdagen:</span> Bel voor openingstijden</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Apothecare. Alle rechten voorbehouden. | Privacybeleid | Algemene Voorwaarden</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>
/* Additional styling for Font Awesome icons */
.social-links a svg {
  width: 18px;
  height: 18px;
  color: white;
}
</style>