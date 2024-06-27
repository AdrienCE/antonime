import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import './assets/tailwind.css';
import router from './router'

createApp(App).use(router, VueLazyLoad).mount('#app')
