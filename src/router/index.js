/**
 * Vue Router Configuration
 */

import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home Page',
        component:() => import('@/pages/HomePage.vue')
    },
    {
        path:'/visual-illusions',
        name:'Visual Illusions',
        component:() => import('@/pages/VisualIllusion.vue')
    },
    {
        path:'/scene-trees',
        name:'Scene Trees',
        component:() => import('@/pages/SceneTrees.vue')
    },
    {
        path:'/antialiasing',
        name:'Anti-aliasing',
        component:() => import('@/pages/Antialiasing.vue')
    },
    {
        path:'/shaders',
        name:'Shaders',
        component:() => import('@/pages/Shaders.vue')
    }
]

const router = new VueRouter({
    mode : 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;