<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Unity WEBGL</h1>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms. It is particularly popular for iOS and Android mobile game development and is considered easy to use for beginner developers and is popular for indie game development.
            </p>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col>
                <b-img thumbnail src="https://1000marcas.net/wp-content/uploads/2021/02/Unity-Logo.jpg" class="mt-4"/>
            </b-col>
            <b-col>
                <b-img thumbnail src="https://unity3d.com/profiles/unity3d/themes/unity/images/unity/beta/alpha-beta/2020.1b-improvements.jpg" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                The development in Unity is mainly done in the C# programming language, in order to move from this high-level language to the corresponding languages for each of the platforms.
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                The platforms supported by the latest versions of unity are the following:
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p>
                <ul>
                    <li>
                        iOS phones
                    </li>
                    <li>
                        Android phones
                    </li>
                    <li>
                        Windows computers
                    </li>
                    <li>
                        Linux computers
                    </li>
                    <li>
                        WebGL (Browsers)
                    </li>
                    <li>
                        PS4 / PS5
                    </li>
                    <li>
                        Xbox One / Xbox Series X
                    </li>
                    <li>
                        Oculus Rift
                    </li>
                    <li>
                        Android TV
                    </li>
                    <li>
                        tv OS
                    </li>
                    <li>
                        Nintendo Switch
                    </li>
                    <li>
                        iOS phones
                    </li>
                </ul>
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                The goal of introducing Unity is to introduce a higher level alternative to p5.js, since Unity has WebGL support. Unity is very similar to p5.js so you can create sketches with the same features and export it to multiple platforms.
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                Next we will see a small example where we will compare the sketches designed in each platform.
            </p>
        </b-row>
        <b-row>
            <b-col cols="12" class="mb-4">
                <SketchP5 :sketch="sketch" class="mt-4" :width=960 :heigth=600 />
            </b-col>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <SketchUnity 
                dataPath="scketch/UnityComparation/Build/Unity.data"
                loaderPath="scketch/UnityComparation/Build/Unity.loader.js"
                frameworkPath="scketch/UnityComparation/Build/Unity.framework.js"
                codePath="scketch/UnityComparation/Build/Unity.wasm"
                streamingAssetsPath="scketch/UnityComparation/StreamingAssets"
                companyName="Visual Computing"
                productName="Unity Comparation"
                productVersion="1.0"
                width="960"
                height="600"
                />
        </b-row>   
    </b-container>
</template>

<script>
    import SketchUnity from '@/components/SketchUnity.vue';
    import SketchP5 from '../components/SketchP5.vue';

    import UnityIntroduction from '@/sketches/unity-introduction.p5'
    export default {
        name: "UnityWebGL",
        components: {
            SketchP5,
            SketchUnity
        },
        data(){
            return {
                sketch: UnityIntroduction
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