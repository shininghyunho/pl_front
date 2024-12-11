import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

// API 기본 URL 설정
axios.defaults.baseURL = 'http://localhost:8080'

// 전역으로 axios 설정
const app = createApp(App)
app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
