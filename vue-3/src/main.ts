import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes'
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const app = createApp(App)

pinia.use(piniaPersistedState)

app.use(router)
app.use(pinia)

app.mount('#app')
