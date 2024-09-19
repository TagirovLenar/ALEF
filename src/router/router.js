import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/', name: 'Home', component: () =>(import('../components/FormView.vue'))
    },
    {
        path: '/pre', name: 'Preview', component: () =>(import('../components/PreView.vue'))
    },
]

const router = createRouter({
    history: createWebHistory(),

    routes
})
export default router