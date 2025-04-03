<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './styles/main.css';
@import './styles/pages/home.css';
@import './styles/components/header.css';
@import './styles/components/footer.css';
@import './styles/pages/common.css';
@import './styles/pages/auth.css';
@import './styles/dashboard.css'; /* Added dashboard CSS */
</style>
