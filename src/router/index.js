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
        component:() => import('@/pages/SceneTreesCopy.vue')
    }
    ,
    {
        path:'/rasterization',
        name:'Rasterization',
        component:() => import('@/pages/Rasterization.vue')
    }
]

const router = new VueRouter({
    mode : 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;