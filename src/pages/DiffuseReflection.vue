<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Diffuse Reflection</h1>
        </b-row>
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p class="text-justify">Diffuse reflection is the reflection of light or other waves or particles from a surface such that a ray incident on the surface is scattered at many angles rather than at just one angle as in the case of specular reflection. An ideal diffuse reflecting surface is said to exhibit Lambertian reflection, meaning that there is equal luminance when viewed from all directions lying in the half-space adjacent to the surface. </p>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col>
                <b-img thumbnail src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Lambert2.gif" class="mt-4"/>
            </b-col>
            <b-col>
                <b-img thumbnail src="https://media.istockphoto.com/photos/moon-in-black-and-white-picture-id1136640083?k=20&m=1136640083&s=612x612&w=0&h=uKRjHmTcoAHed696QIad3qsf2x5zIX-6G931pZ8cTJA=" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row>
            <h2 class="mt-4">Literature review</h2>
        </b-row>
        <b-row>
            <p>The moon exhibits almost exclusively diffuse reflection (also called Lambertian reflection), i.e. light is reflected into all directions without specular highlights. Other examples of such materials are chalk and matte paper; in fact, any surface that appears dull and matte. </p>
        </b-row>
        <b-row>
            <p>In the case of perfect diffuse reflection, the intensity of the observed reflected light depends on the cosine of the angle between the surface normal vector and the ray of the incoming light. As illustrated in the figure, it is common to consider normalized vectors starting in the point of a surface, where the lighting should be computed: the normalized surface normal vector <strong>N</strong> is orthogonal to the surface and the normalized light direction <strong>L</strong> points to the light source. </p>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col align-self="center" class="text-center">
                <b-img thumbnail style="height: 300px;" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Diffuse_Reflection_Vectors.svg/1920px-Diffuse_Reflection_Vectors.svg.png" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <p>For the observed diffuse reflected light <vue-mathjax formula="$I_{diffuse}$"/>, we need the cosine of the angle between the normalized surface normal vector N and the normalized direction to the light source <vue-mathjax formula="$L$"/>, which is the dot product <vue-mathjax formula="$N \cdot L$"/></p>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <vue-mathjax class="mt-4 big" formula="$$N \cdot L = |N| |L| \cos{\measuredangle N, L}$$"/>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <p>If the dot product <vue-mathjax formula="$N \cdot L$"/> is negative, the light source is on the “wrong” side of the surface and we should set the reflection to 0. This can be achieved by using <vue-mathjax formula="$max(0, N \cdot L)$"/>, which makes sure that the value of the dot product is clamped to 0 for negative dot products. Furthermore, the reflected light depends on the intensity of the incoming light <vue-mathjax formula="$I_{incomming}$"/> and a material constant <vue-mathjax formula="$k_{diffuse}$"/> for the diffuse reflection: for a black surface, the material constant <vue-mathjax formula="$k_{diffuse}$"/> is 0, for a white surface it is 1. The equation for the diffuse reflected intensity is then: </p>
        </b-row>
        <b-row class="mt-4">
            <b-col>
                <vue-mathjax class="mt-4 big" formula="$$I_{diffuse} = I_{incomming} k_{diffuse} max(0, N \cdot L)$$"/>
            </b-col>
        </b-row>
        <b-row>
            <h2 class="mt-4">Methods</h2>
        </b-row>
        <b-row class="mt-4">
            <p>Now let's see a procedure to realize this Diffuse Reflection, this procedure may be performed for every pixel in figure</p>
            <p>
                <ol>
                    <li>
                        Get the vector <vue-mathjax formula="$N$"/> as the normal vector of this point to the surface.
                    </li>
                    <li>
                        Get the vector <vue-mathjax formula="$L$"/> as the vector from the point to the light.
                    </li>
                    <li>
                        Normalize the vectors as <vue-mathjax formula="$|N|$"/> and <vue-mathjax formula="$|L|$"/>.
                    </li>
                    <li>
                        Normalize the vectors as <vue-mathjax formula="$|N|$"/> and <vue-mathjax formula="$|L|$"/>.
                    </li>
                    <li>
                        Calculate the resulting color of multiply the light color <vue-mathjax formula="$C_{light}$"/> and the color of the point <vue-mathjax formula="$C$"/>.
                    </li>
                    <li>
                        Multiply the previus result <vue-mathjax formula="$C_{light}C$"/> by the maximun between 0 and <vue-mathjax formula="$N \cdot L$"/>.
                    </li>
                    <li>
                        The resulting color is the color of the point.
                    </li>
                </ol>
            </p>
        </b-row>
        <b-row class="mt-4">
            <p>Let's see an implementation of this shader using and extention of GLSL on HLSL in unity</p>
        </b-row>
        <b-row>
            <h2 class="mt-4">Code and Results</h2>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <SketchUnity 
                dataPath="scketch/Light/Build/Unity.data"
                loaderPath="scketch/Light/Build/Unity.loader.js"
                frameworkPath="scketch/Light/Build/Unity.framework.js"
                codePath="scketch/Light/Build/Unity.wasm"
                streamingAssetsPath="scketch/Light/StreamingAssets"
                companyName="Visual Computing"
                productName="Diffuse Reflection"
                productVersion="1.0"
                width="960"
                height="600"
                />
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <h3>Source Code Unity</h3>
        </b-row>
        <div>
            <code-highlight language="glsl">
                <pre>
Shader "Unity Shader" {
    Properties{
        _Flag("Flag", Float) = 0
    }
    SubShader {
        Pass {
            Tags { "LightMode" = "ForwardBase" }

            GLSLPROGRAM

            uniform float _Flag;
            uniform mat4 _Object2World;
            uniform mat4 _World2Object;
            uniform vec4 _WorldSpaceLightPos0;
            uniform vec4 _LightColor0;

            #ifdef VERTEX

            varying vec4 color;

            void main() {
                mat4 modelMatrix = _Object2World;
                mat4 modelMatrixInverse = _World2Object;
                vec3 normalDirection = normalize(vec3(vec4(gl_Normal, 0.0) * modelMatrixInverse));
                vec3 lightDirection = normalize(vec3(_WorldSpaceLightPos0));
                vec3 diffuseReflection = 
                    vec3(_LightColor0) * 
                    (_Flag == 1.0 ? (vec3(gl_Vertex) + vec3(0.5, 0.5, 0.5)) : vec3(0.5, 0.5, 0.5)) * 
                    max(0.0, dot(normalDirection, lightDirection));

                color = vec4(diffuseReflection, 1.0);
                gl_Position = gl_ModelViewProjectionMatrix * gl_Vertex;
            }
            #endif

            #ifdef FRAGMENT

            varying vec4 color;

            void main()  {
                gl_FragColor = color;
            }
            #endif

            ENDGLSL
        }
    }
}
                </pre>
            </code-highlight>
        </div>
        <b-row>
            <h2>Discussion</h2>
        </b-row>
        <b-row>
            <p>Diffuse reflection is only one of many illumination models that we can find, there are cases where you have non-flat surfaces, with different materials and opacities, and you can even have several lights. What we have seen in this web page is just a small glimpse of how sophisticated and complex lighting models can be.</p>
        </b-row>
        <b-row>
            <h2>Conclusion</h2>
        </b-row>
        <b-row>
            <p>Working with lights in computer graphics requires great knowledge of how these waves behave, it is important to abstract the behavior of things to computation and in the case of lights it is something that can be easily worked with using shaders. </p>
        </b-row>
    </b-container>
</template>

<script>
    import SketchUnity from '@/components/SketchUnity.vue';

    import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";
    import 'prism-es6/components/prism-markup-templating';
    import 'prism-es6/components/prism-glsl';
    import { VueMathjax } from 'vue-mathjax';

    export default {
        name: "VisualIllusion",
        components: {
            CodeHighlight,
            'vue-mathjax': VueMathjax,
            SketchUnity
        },
        data(){
            return {
                
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
    .big {
        font-size: 1.25rem;
    }
</style>