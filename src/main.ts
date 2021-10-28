import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import toast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'

createApp(App)
  .use(store)
  .use(router)
  .use(toast)
  .mount('#app')
