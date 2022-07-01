import { createRouter, createWebHistory } from 'vue-router'
import { useUser } from '../store/user';
import DisplayRestaurants from '/src/views/DisplayRestaurants.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: DisplayRestaurants,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "output" */ '../views/Login.vue'),
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
router.beforeEach(async (to, from) => {
    const userStore = useUser();
    console.log(userStore.isAuthenticated);
    if (to.name !== 'Login' && !userStore.isAuthenticated) {
        return { name: 'Login' };
      }
      return true;
    
  })
  
  
export default router