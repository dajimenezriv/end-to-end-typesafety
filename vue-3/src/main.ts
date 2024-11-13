import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import $bus from './utils/Events'

const app = createApp(App)

app.config.globalProperties.$bus = $bus

app.mount('#app')
