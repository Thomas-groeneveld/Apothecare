<template>
  <div class="default-layout">
    <Header />
    <main class="main-content">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>