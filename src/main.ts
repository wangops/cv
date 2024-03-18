import './assets/css/main.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VConsole from 'vconsole'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')


if(import.meta.env.MODE == "dev"){
    new VConsole()
}