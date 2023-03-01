import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store'
import tailwindcss from './assets/tailwindcss.css';
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
AOS.init();
createApp(App).use(store).use(Vuelidate).use(vuetify).use(router).use(tailwindcss).use(ElementPlus).use(moshaToast).mount('#app')
