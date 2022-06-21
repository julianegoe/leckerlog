import { createRouter, createWebHistory } from 'vue-router'
import DisplayFood from '/src/views/DisplayFood.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: DisplayFood,
    },
    {
        path: '/add',
        name: 'AddFood',
        component: () => import(/* webpackChunkName: "output" */ '../views/AddFood.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router