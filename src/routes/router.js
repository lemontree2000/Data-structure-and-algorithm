import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'
import Array from '../views/array/index'
import Stack from '../views/stack/index'
import Queue from '../views/queue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: "/array",
            component: Array
        },
        {
            path: "/stack",
            component: Stack
        },
        {
            path: "/queue",
            component: Queue
        }
    ]
})


