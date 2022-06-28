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
        path:'/coloring',
        name:'Coloring',
        component:() => import('@/pages/Coloring.vue')
    },
    {
        path:'/texturing',
        name:'Texturing',
        component:() => import('@/pages/Texturing.vue')
    },
    {
        path:'/image-processing',
        name:'Image processing',
        component:() => import('@/pages/ImageProcessing.vue')
    },
    {
        path:'/procedural-texturing',
        name:'Procedural texturing',
        component:() => import('@/pages/ProceduralTexturing.vue')
    },
    {
        path:'/unity-webgl',
        name:'Unity WEBGL',
        component:() => import('@/pages/UnityWebGL.vue')
    },
    {
        path:'/diffuse-reflection',
        name:'Shaders in Unity',
        component:() => import('@/pages/DiffuseReflection.vue')
    },
    {
        path:'/unity-shader-graph',
        name:'Shader Graph',
        component:() => import('@/pages/UnityShaderGraph.vue')
    }
]

const router = new VueRouter({
    mode : 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;