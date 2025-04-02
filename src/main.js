import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faFlask, faTruck, faPrescriptionBottleMedical, faUserDoctor, faVials } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(
  faCheck, faFlask, faTruck, faPrescriptionBottleMedical, 
  faUserDoctor, faVials, faFacebookF, faTwitter, 
  faInstagram, faLinkedinIn
)

const app = createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
