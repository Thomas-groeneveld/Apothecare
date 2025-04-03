<template>
  <DefaultLayout>
    <section class="page-section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">Onze Diensten</span>
          <h1>Farmaceutische Diensten</h1>
          <div class="separator"></div>
          <p class="intro-text">Wij bieden een breed scala aan farmaceutische diensten, aangepast aan uw behoeften. Van receptverwerking tot persoonlijke consultaties, wij zijn er om u te helpen.</p>
        </div>

        <div class="services-list">
          <div class="service-item">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'prescription-bottle-medical']" />
            </div>
            <div class="service-details">
              <h3>Receptdiensten</h3>
              <p>Onze apotheken bieden snelle en nauwkeurige receptverwerking. Ons team van deskundige apothekers controleert elke voorgeschreven medicatie zorgvuldig op potentiële interacties voordat deze aan u wordt verstrekt. We bieden ook herhaalrecepten en elektronische receptservices.</p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'user-doctor']" />
            </div>
            <div class="service-details">
              <h3>Gezondheidsconsulten</h3>
              <p>Onze one-on-one gezondheidsconsultaties worden uitgevoerd door ervaren apothekers die deskundig advies kunnen geven over verschillende gezondheidskwesties, medicatiebeheer en chronische ziekten. We nemen de tijd om naar uw zorgen te luisteren en gepersonaliseerde oplossingen te bieden.</p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'truck']" />
            </div>
            <div class="service-details">
              <h3>Thuisbezorging</h3>
              <p>Voor klanten die niet gemakkelijk naar onze fysieke locaties kunnen komen, bieden wij een betrouwbare bezorgservice voor medicijnen. Ontvang uw voorgeschreven medicatie veilig en op tijd bij u thuis, met volledige discretie en professionele aanpak.</p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'vials']" />
            </div>
            <div class="service-details">
              <h3>Gezondheidstests</h3>
              <p>Wij bieden verschillende gezondheidstests aan, waaronder bloeddrukmetingen, glucosemonitoring, cholesterolonderzoek en meer. Onze tests worden uitgevoerd door gekwalificeerde professionals die de resultaten interpreteren en advies geven over volgende stappen.</p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'pills']" />
            </div>
            <div class="service-details">
              <h3>Medicatiebeheer</h3>
              <p>Ons medicatiebeheer programma helpt patiënten die meerdere medicijnen gebruiken. We organiseren uw medicatie in gemakkelijk te gebruiken verpakkingen, met duidelijke instructies voor wanneer en hoe u ze moet nemen. Dit vermindert verwarring en vergissingen.</p>
            </div>
          </div>
          
          <div class="service-item">
            <div class="service-icon">
              <font-awesome-icon :icon="['fas', 'syringe']" />
            </div>
            <div class="service-details">
              <h3>Vaccinaties</h3>
              <p>Wij bieden verschillende vaccinaties aan, waaronder seizoensgebonden griepvaccins, reisvaccins en andere immunisaties. Onze apothekers zijn volledig opgeleid om vaccins te geven in een comfortabele en veilige omgeving.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

export default {
  name: 'ServicesPage',
  components: {
    DefaultLayout
  }
}
</script>

<style>
.intro-text {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.8;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.service-item {
  display: flex;
  gap: 25px;
  background-color: var(--white);
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: var(--transition);
}

.service-item:hover {
  transform: translateY(-5px);
}

.service-icon {
  flex: 0 0 80px;
  height: 80px;
  background-color: rgba(13, 138, 83, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: var(--primary-color);
}

.service-details {
  flex: 1;
}

.service-details h3 {
  color: var(--primary-dark);
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.service-details p {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .service-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .service-icon {
    margin-bottom: 20px;
  }
}
</style>