<template>
  <DefaultLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Contact</span>
          <h1>Neem Contact Op</h1>
          <div class="separator"></div>
          <p class="intro-text">Heeft u vragen of wilt u meer informatie? Ons team staat klaar om u te helpen. Vul het onderstaande formulier in of gebruik een van onze andere contactmethoden.</p>
        </div>

        <div class="contact-container">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
              </div>
              <div>
                <h3>Bezoek ons</h3>
                <p>Apothecare Hoofdvestiging<br>Medischstraat 123<br>1234 AB Amsterdam</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </div>
              <div>
                <h3>Bel ons</h3>
                <p>Tel: 020 - 123 4567<br>Maandag - Vrijdag: 8:00 - 20:00<br>Weekend: 9:00 - 18:00</p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div>
                <h3>E-mail ons</h3>
                <p>info@apothecare.nl<br>klantenservice@apothecare.nl</p>
              </div>
            </div>
            
            <div class="social-connect">
              <h3>Volg ons</h3>
              <div class="social-icons">
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
          </div>
          
          <div class="contact-form">
            <h3>Stuur ons een bericht</h3>
            <form @submit.prevent="submitForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Naam</label>
                  <input type="text" id="name" v-model="form.name" required>
                </div>
                <div class="form-group">
                  <label for="email">E-mail</label>
                  <input type="email" id="email" v-model="form.email" required>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Onderwerp</label>
                <input type="text" id="subject" v-model="form.subject" required>
              </div>
              
              <div class="form-group">
                <label for="message">Bericht</label>
                <textarea id="message" rows="6" v-model="form.message" required></textarea>
              </div>
              
              <button type="submit" class="btn primary">Bericht versturen</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'ContactPage',
  components: {
    DefaultLayout
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // Hier zou je normaal een API-aanroep doen
      alert(`Bedankt voor uw bericht, ${this.form.name}! We nemen zo spoedig mogelijk contact met u op.`);
      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  }
}
</script>

<style>
.intro-text {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 60px;
  line-height: 1.8;
}

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-info {
  background-color: var(--white);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.info-item {
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
}

.info-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(13, 138, 83, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 20px;
  color: var(--primary-color);
  flex-shrink: 0;
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--primary-dark);
}

.info-item p {
  color: var(--text-light);
  line-height: 1.6;
  margin-bottom: 0;
}

.social-connect h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--primary-dark);
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(13, 138, 83, 0.1);
  border-radius: 50%;
  color: var(--primary-color);
  transition: var(--transition);
}

.social-icons a:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-5px);
}

.contact-form {
  background-color: var(--white);
  padding: 40px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.contact-form h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  color: var(--primary-dark);
}

.form-group {
  margin-bottom: 20px;
  flex: 1;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: inherit;
}

.form-group textarea {
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(13, 138, 83, 0.1);
}

.contact-form .btn {
  width: 100%;
  padding: 14px;
}

@media (min-width: 992px) {
  .contact-container {
    flex-direction: row;
  }
  
  .contact-info,
  .contact-form {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
</style>