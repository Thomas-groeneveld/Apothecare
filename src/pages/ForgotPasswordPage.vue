<template>
  <DefaultLayout>
    <div class="auth-wrapper">
      <form @submit.prevent="handleReset">
        <!-- Hoofdcontainer voor formulier elementen -->
        <div class="auth-container">
          <!-- Paginatitel -->
          <h1>Wachtwoord vergeten</h1>
          
          <!-- Instructie tekst voor gebruikers -->
          <p style="text-align: center; margin-bottom: 20px; color: #555;">
            Vul je e-mailadres in en we sturen je een link om je wachtwoord te resetten.
          </p>
          
          <!-- Label en inputveld voor e-mailadres -->
          <label for="email"><b>E-mailadres</b></label>
          <input 
            type="email" 
            placeholder="Voer je e-mailadres in" 
            v-model="email" 
            name="email" 
            required
          >
          
          <!-- Submitknop om herstelverzoek te versturen -->
          <button type="submit">Verstuur herstel-link</button>
        </div>

        <!-- Container voor navigatielinks -->
        <div class="auth-links">
          <!-- Link om terug te keren naar inlogpagina -->
          <span class="psw"><router-link to="/login">Terug naar inloggen</router-link></span>
        </div>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'ForgotPasswordPage',
  components: {
    DefaultLayout
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleReset() {
      // Implementeer hier je wachtwoord reset logica
      console.log('Wachtwoord reset voor:', this.email);
      alert(`Een herstel-link is verzonden naar ${this.email}`);
      // Hier zou je normaal een API-aanroep doen
    }
  }
}
</script>