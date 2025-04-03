<template>
  <DashboardLayout>
    <h1>Personeels Dashboard</h1>
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h2>Medicatie Bekijken</h2>
        <p>Bekijk een overzicht van alle beschikbare medicatie.</p>
        <router-link to="/dashboard/medicatie">Ga naar Medicatie</router-link>
      </div>
      
      <div class="dashboard-card">
        <h2>Medicatie Voorraad Bekijken</h2>
        <p>Controleer de voorraadstatus van medicatie.</p>
        <router-link to="/dashboard/voorraad">Ga naar Voorraad</router-link>
      </div>
      
      <div class="dashboard-card">
        <h2>Klanten Bestellingen Bekijken</h2>
        <p>Bekijk en beheer bestellingen van klanten.</p>
        <router-link to="/dashboard/bestellingen">Ga naar Bestellingen</router-link>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from '@/layouts/DashboardLayout.vue'

export default {
  name: 'DashboardHome',
  components: {
    DashboardLayout
  }
}
</script>