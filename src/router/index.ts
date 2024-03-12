import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
    history: createWebHistory('/cv/'),
    routes: [
        {
            path: '/index',
            name: 'index',
            component: Index
        }
    ]
})
export default router
