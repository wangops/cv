import { createRouter, createWebHistory } from 'vue-router'
import webgl from './webgl'
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'home',
            component:()=> import("@/views/Home.vue"),
            children:[{
                path: '/',
                name: 'personal',
                component:()=> import("@/views/cv/Personal.vue"),
            }]
        },
        ...webgl
    ]
})
export default router
