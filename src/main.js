import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import tailwindcss from './assets/tailwindcss.css';
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init();
createApp(App).use(store).use(Vuelidate).use(router).use(tailwindcss).use(moshaToast).mount('#app')
