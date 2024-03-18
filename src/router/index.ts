import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import webgl from './webgl'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        ...webgl
    ]
})
export default router
