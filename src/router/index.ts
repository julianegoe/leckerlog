import { createRouter, createWebHistory } from 'vue-router'
import DisplayRestaurants from '/src/views/DisplayRestaurants.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: DisplayRestaurants,
    },
    {
        path: '/food/:id',
        name: 'Food',
        component: () => import(/* webpackChunkName: "output" */ '../views/DisplayFood.vue'),
        props: true,
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