<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Apothecare Logo">
          <span>Apothecare</span>
        </router-link>
      </div>
      <nav class="main-nav">
        <ul>
          <li><router-link to="/" exact>Home</router-link></li>
          <li><router-link to="/about">Over Ons</router-link></li>
          <li><router-link to="/services">Diensten</router-link></li>
          <li><router-link to="/products">Producten</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <div class="auth-buttons">
        <router-link to="/login" class="login-btn">Inloggen</router-link>
        <router-link to="/registreren" class="register-btn">Registreren</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style>
.logo img {
  height: 40px;
  margin-right: 10px;
}
</style>