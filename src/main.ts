import './assets/css/main.less'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VConsole from 'vconsole'
import { settingStore } from './stores/settingStore'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// 初始化store
settingStore().init()

if(import.meta.env.MODE == "dev"){
    new VConsole()
}