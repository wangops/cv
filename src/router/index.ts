import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import webgl from './webgl'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        ...webgl
    ]
})
export default router
