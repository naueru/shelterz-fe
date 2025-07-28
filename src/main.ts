// Core
import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Router
import router from '@/router'

// Components
import App from '@/App.vue'

// Utils
import { checkTokenOnLoad } from '@/utils/auth'

// Styles
import './styles/main.css'

const app = createApp(App)

app.use(VueAxios, axios)

app.use(router)

checkTokenOnLoad()

app.mount('#app')
