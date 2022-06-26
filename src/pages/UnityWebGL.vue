<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Unity WEBGL</h1>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <SketchUnity 
                dataPath="test/Build/Unity.data"
                loaderPath="test/Build/Unity.loader.js"
                frameworkPath="test/Build/Unity.framework.js"
                codePath="test/Build/Unity.wasm"
                streamingAssetsPath="test/StreamingAssets"
                companyName="Visual Computing"
                productName="Test Unity"
                productVersion="1.0"
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