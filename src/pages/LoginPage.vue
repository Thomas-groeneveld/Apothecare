<template>
  <DefaultLayout>
    <div class="auth-wrapper">
      <form @submit.prevent="handleLogin">
        <!-- Hoofdcontainer voor login formulier elementen -->
        <div class="auth-container">
          <!-- Paginatitel -->
          <h1>Inloggen</h1>
          
          <!-- Veld voor gebruikersnaam -->
          <label for="username"><b>Gebruikersnaam</b></label>
          <input 
            type="text" 
            placeholder="Voer gebruikersnaam in" 
            v-model="username" 
            name="username" 
            required
          >

          <!-- Veld voor wachtwoord -->
          <label for="password"><b>Wachtwoord</b></label>
          <input 
            type="password" 
            placeholder="Voer wachtwoord in" 
            v-model="password" 
            name="password" 
            required
          >

          <!-- Submitknop om het loginformulier te verzenden -->
          <button type="submit">Inloggen</button>
        </div>

        <!-- Container voor navigatielinks -->
        <div class="auth-links">
          <!-- Link naar wachtwoord vergeten pagina -->
          <span class="psw"><router-link to="/wachtwoord-vergeten">Wachtwoord vergeten?</router-link></span> <br>
          <!-- Link naar registratiepagina voor nieuwe gebruikers -->
          <span class="psw"><router-link to="/registreren">Nieuw account maken</router-link></span>
        </div>
      </form>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'LoginPage',
  components: {
    DefaultLayout
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      // Implementeer hier je inlog logica
      console.log('Inloggen met:', this.username, this.password);
      alert(`Inlogverzoek voor ${this.username} ontvangen.`);
      // Hier zou je normaal een API-aanroep doen
    }
  }
}
</script>