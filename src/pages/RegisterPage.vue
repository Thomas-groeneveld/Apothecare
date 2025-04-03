<template>
  <DefaultLayout>
    <div class="auth-wrapper">
      <form @submit.prevent="handleRegister">
        <!-- Hoofdcontainer voor formulier elementen -->
        <div class="auth-container">
          <!-- Paginatitel -->
          <h1>Account aanmaken</h1>
          
          <!-- Flexbox rij voor naast elkaar geplaatste velden (voornaam en achternaam) -->
          <div class="form-row">
            <!-- Linker kolom voor voornaam -->
            <div>
              <label for="voornaam"><b>Voornaam</b></label>
              <input 
                type="text" 
                placeholder="Voer voornaam in" 
                v-model="voornaam" 
                name="voornaam" 
                required
              >
            </div>
            <!-- Rechter kolom voor achternaam -->
            <div>
              <label for="achternaam"><b>Achternaam</b></label>
              <input 
                type="text" 
                placeholder="Voer achternaam in" 
                v-model="achternaam" 
                name="achternaam" 
                required
              >
            </div>
          </div>
          
          <!-- Veld voor e-mailadres -->
          <label for="email"><b>E-mailadres</b></label>
          <input 
            type="email" 
            placeholder="Voer e-mailadres in" 
            v-model="email" 
            name="email" 
            required
          >
          
          <!-- Veld voor gebruikersnaam -->
          <label for="gebruikersnaam"><b>Gebruikersnaam</b></label>
          <input 
            type="text" 
            placeholder="Voer gebruikersnaam in" 
            v-model="gebruikersnaam" 
            name="gebruikersnaam" 
            required
          >

          <!-- Veld voor wachtwoord -->
          <label for="wachtwoord"><b>Wachtwoord</b></label>
          <input 
            type="password" 
            placeholder="Voer wachtwoord in" 
            v-model="wachtwoord" 
            name="wachtwoord" 
            required
          >
          
          <!-- Veld voor wachtwoord bevestiging -->
          <label for="wachtwoord-bevestigen"><b>Bevestig wachtwoord</b></label>
          <input 
            type="password" 
            placeholder="Bevestig wachtwoord" 
            v-model="wachtwoordBevestigen" 
            name="wachtwoord-bevestigen" 
            required
          >
          
          <!-- Submitknop om het registratieformulier te verzenden -->
          <button type="submit">Registreren</button>
        </div>

        <!-- Container voor navigatielinks -->
        <div class="auth-links">
          <!-- Link om terug te keren naar inlogpagina voor bestaande gebruikers -->
          <span class="psw">Heb je al een account? <router-link to="/login">Inloggen</router-link></span>
        </div>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'RegisterPage',
  components: {
    DefaultLayout
  },
  data() {
    return {
      voornaam: '',
      achternaam: '',
      email: '',
      gebruikersnaam: '',
      wachtwoord: '',
      wachtwoordBevestigen: ''
    }
  },
  methods: {
    handleRegister() {
      // Check of wachtwoorden overeenkomen
      if (this.wachtwoord !== this.wachtwoordBevestigen) {
        alert('Wachtwoorden komen niet overeen');
        return;
      }
      
      // Implementeer hier je registratie logica
      console.log('Registreren voor:', this.email, this.gebruikersnaam);
      alert(`Registratieverzoek voor ${this.gebruikersnaam} ontvangen.`);
      // Hier zou je normaal een API-aanroep doen
    }
  }
}
</script>