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
            <vue-mathjax formula="$$\pi$$"></vue-mathjax>
        </b-row>
        <b-row>
            <h2>Code and Results</h2>
        </b-row>
        <b-row>
            <b-col cols="12" class="mb-4">
                <SketchP5 :sketch="sketch" class="mt-4" :width="960" :heigth="640"/>
            </b-col>
            <b-col cols="2" offset="2">
                <b-row class="m-2">
                    <label for="input-field-0x">Punto 1 X</label>
                    <b-form-input size="sm" id="input-field-0x" type="number" min="1" max="96" value="5"/>
                </b-row>
                <b-row class="m-2">
                    <label for="input-field-1x">Punto 2 X</label>
                    <b-form-input size="sm" id="input-field-1x" type="number" min="1" max="96" value="25"/>
                </b-row>
                <b-row class="m-2">
                    <label for="input-field-2x">Punto 3 X</label>
                    <b-form-input size="sm" id="input-field-2x" type="number" min="1" max="96" value="25"/>
                </b-row>
            </b-col>
            <b-col cols="2" >
               <b-row class="m-2">
                   <label for="input-field-0y">Punto 1 Y</label>
                    <b-form-input size="sm" id="input-field-0y" type="number" min="1" max="64" value="22"/>
                </b-row>
                <b-row class="m-2">
                    <label for="input-field-1y">Punto 2 Y</label>
                    <b-form-input size="sm" id="input-field-1y" type="number" min="1" max="64" value="5"/>
                </b-row>
                <b-row class="m-2">
                    <label for="input-field-2y">Punto 3 Y</label>
                    <b-form-input size="sm" id="input-field-2y" type="number" min="1" max="64" value="30"/>
                </b-row>
            </b-col>
            <b-col cols="2">
                <b-row class="m-2">
                    <label for="input-field-cols">Columnas</label>
                    <b-form-input size="sm" id="input-field-cols" type="number" min="1" max="96" value="48"/>
                </b-row>
                <b-row class="m-2">
                   <b-form-checkbox button-variant="primary" id="input-field-antialiasing" switch v-model="antialiasing">
                        Antialiasing
                    </b-form-checkbox>
                </b-row>
                <b-row class="m-2">
                   <b-form-checkbox button-variant="primary" id="input-field-grid" switch v-model="grid">
                        Grid
                    </b-form-checkbox>
                </b-row>
            </b-col>
            <b-col cols="2" >
               <b-row class="m-2">
                   <label for="input-field-rows">Filas</label>
                    <b-form-input size="sm" id="input-field-rows" type="number" min="1" max="64" value="32"/>
                </b-row>
                <b-row class="m-2">
                   <b-form-checkbox button-variant="primary" id="input-field-stroke" switch v-model="stroke">
                        Stroke
                    </b-form-checkbox>
                </b-row>
                <b-row class="m-2">
                   <label for="input-field-step">Step</label>
                    <b-form-input size="sm" id="input-field-step" type="number" min="1" max="5" value="3"/>
                </b-row>
            </b-col>
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
    import antialiasing from '../sketches/antialiasing.p5';
    import SketchP5 from '../components/SketchP5.vue';

    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";
    import { VueMathjax } from 'vue-mathjax';

    export default {
        name: "VisualIllusion",
        components: {
            SketchP5,
            'vue-mathjax': VueMathjax
        },
        data(){
            return {
                stroke: true,
                grid: true,
                antialiasing: true,
                sketch: antialiasing
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