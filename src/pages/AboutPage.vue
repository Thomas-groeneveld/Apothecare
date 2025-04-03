<template>
  <DefaultLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Over Ons</span>
          <h1>Over Apothecare</h1>
          <div class="separator"></div>
          <p class="intro-text">Bij Apothecare zetten we ons in voor het leveren van hoogwaardige farmaceutische zorg en het bevorderen van de gezondheid in onze gemeenschap.</p>
        </div>

        <div class="about-content">
          <div class="about-text">
            <h2>Onze Geschiedenis</h2>
            <p>
              Apothecare werd in 2005 opgericht door een team van ervaren apothekers met een gedeelde visie: hoogwaardige farmaceutische diensten toegankelijk maken voor iedereen.
            </p>
            <p>
              Wat begon als een kleine buurtapotheek is nu uitgegroeid tot een toonaangevende naam in farmaceutische zorg, met meerdere vestigingen en een toegewijd team van zorgprofessionals.
            </p>

            <h2>Onze Missie</h2>
            <p>
              Onze missie is om uitstekende farmaceutische zorg te bieden die toegankelijk, betaalbaar en persoonlijk is. We streven ernaar om onze klanten te helpen hun gezondheid te beheren en te verbeteren door middel van deskundig advies en hoogwaardige producten.
            </p>

            <h2>Ons Team</h2>
            <p>
              Ons team bestaat uit gekwalificeerde apothekers, apothekersassistenten en zorgprofessionals die allemaal één doel delen: uitstekende zorg bieden aan onze klanten. Met jarenlange ervaring en voortdurende bijscholing, zijn we altijd op de hoogte van de nieuwste ontwikkelingen in de farmaceutische industrie.
            </p>
          </div>
          <div class="about-image">
            <img src="@/assets/about-image.jpg" alt="Ons Apothecare Team">
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'AboutPage',
  components: {
    DefaultLayout
  }
}
</script>

<style>
.about-content {
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  margin-top: 60px;
}

.about-image img {
  width: 100%;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.about-text h2 {
  color: var(--primary-dark);
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 1.8rem;
}

.about-text p {
  margin-bottom: 20px;
  line-height: 1.7;
}

.intro-text {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

@media (min-width: 992px) {
  .about-content {
    flex-direction: row;
    align-items: center;
  }
  
  .about-text {
    flex: 3;
  }
  
  .about-image {
    flex: 2;
  }
}
</style>