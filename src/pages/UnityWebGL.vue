<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Unity WEBGL</h1>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <SketchUnity 
                dataPath="scketch/test/Build/Unity.data"
                loaderPath="scripts/Unity.loader.js"
                frameworkPath="scripts/Unity.framework.js"
                codePath="scketch/test/Build/Unity.wasm"
                streamingAssetsPath="scketch/test/StreamingAssets"
                companyName="Visual Computing"
                productName="Test Unity"
                productVersion="1.0"
                width="960"
                height="600"
                />
        </b-row>   
    </b-container>
</template>

<script>
    import SketchUnity from '@/components/SketchUnity.vue'
    export default {
        name: "UnityWebGL",
        components: {
            SketchUnity
        },
        data(){
            return {

            }
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