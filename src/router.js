import HomeComponent from "./components/HomeComponent.vue";
import DashboardComponent from "./components/DashboardComponent.vue";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/dashboard', component: DashboardComponent},
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})