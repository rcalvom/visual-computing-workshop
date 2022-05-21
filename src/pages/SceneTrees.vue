<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Scene Tree</h1>
        </b-row> 
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row>
            <h2 class="mt-4">Literature review</h2>
        </b-row>
        <b-row>
            <h2>Methods</h2>
        </b-row>
        <b-row>
            <h2>Code and Results</h2>
        </b-row>
        <b-row>
            <SketchP5 :sketch="sketch" class="mt-4"/>
        </b-row>
        <b-row>
            <h2>Discussion</h2>
        </b-row>
        <b-row>
            <h2>Conclusion</h2>
        </b-row>
    </b-container>
</template>

<script>
    //import SceneTrees from '../sketches/SceneTrees.p5';
    import SceneTrees from '../sketches/AntiAliasing.p5';
    import SketchP5 from '../components/SketchP5.vue';

    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";

    export default {
        name: "VisualIllusion",
        components: {
            SketchP5
        },
        data(){
            return {
                sketch: SceneTrees
            }
        },
        created(){  
            
        }
    };
</script>

<style scoped>
    p, li {
        font-size: 1.25rem;
    }    
    h1 {
        font-size: 4rem;
    }
</style>