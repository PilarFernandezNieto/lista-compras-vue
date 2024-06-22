import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTrashCan, faUserPen, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faTrashCan, faUserPen, faPlus );


const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
