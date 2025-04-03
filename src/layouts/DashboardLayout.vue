<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <div class="header-content">
        <img src="@/assets/logo.png" alt="Apothecare Logo" class="logo">
        <h1>Apothecare Dashboard</h1>
      </div>
    </header>
    
    <nav class="dashboard-nav">
      <div class="nav-links">
        <router-link to="/dashboard" :class="{ 'active': $route.path === '/dashboard' }">Dashboard</router-link>
        <router-link to="/dashboard/medicatie" :class="{ 'active': $route.path === '/dashboard/medicatie' }">Medicatie</router-link>
        <router-link to="/dashboard/voorraad" :class="{ 'active': $route.path === '/dashboard/voorraad' }">Voorraad</router-link>
        <router-link to="/dashboard/bestellingen" :class="{ 'active': $route.path === '/dashboard/bestellingen' }">Bestellingen</router-link>
      </div>
      <router-link to="/login" class="logout-button">Uitloggen</router-link>
    </nav>
    
    <div class="dashboard-container">
      <slot></slot>
    </div>
    
    <footer class="dashboard-footer">
      <p>&copy; {{ new Date().getFullYear() }} Apothecare. Alle rechten voorbehouden.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout'
}
</script>