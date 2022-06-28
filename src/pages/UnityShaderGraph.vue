<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Shader Graphs</h1>
        </b-row>
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p class="text-justify">Shader Graph enables you to build shaders visually. Instead of writing code, you create and connect nodes in a graph framework.</p>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p class="text-justify">Shader Graph gives instant feedback that reflects your changes, and it's simple enough for users who are new to shader creation.</p>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p> Shader Graph is available through the Package Manger window in Unity versions 2018.1 and higher. If you install a prebuilt Scriptable Render Pipeline (SRP) such as the Universal Render Pipeline (URP) or the High Definition Render Pipeline (HDRP), Unity automatically installs Shader Graph in your project.</p>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col>
                <b-img thumbnail src="https://blog.undefinist.com/assets/posts/2020-05-06-writing-a-shader-graph/unity_shadergraph.jpg" class="mt-4"/>
            </b-col>
            <b-col>
                <b-img thumbnail src="https://4experience.co/wp-content/uploads/2020/08/Foto12.png" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row>
            <h2 class="mt-4">Literature review</h2>
        </b-row>
        <b-row>
            <p>Shader development requires a significantly high learning curve, it is difficult to start making shaders with a high level of detail, it is because of this problem that Unity has developed a complete framework for shaders based on graphs, where each node represents a basic operation and each edge represents the flow of information.</p>
        </b-row>
        <b-row>
            <p>Unity claims that this Shader graph framework is the correct way to visualize a shader, because if we only see its location on a texture, we are losing all the work behind it.</p>
        </b-row>
        <b-row>
            <h2 class="mt-4">Methods</h2>
        </b-row>
        <b-row class="mt-4">
            <p>Now we are going to see a small development of a shader graph to show the great level of detail that this framework allows us to obtain.</p>
            <p>
                <ol>
                    <li>
                        The first thing is to create a shader graph, with this we will be able to visualize the vertex and the fragment shader as nodes of the graph
                    </li>
                    <li>
                        Then we will notice that by implementing Unity's default Render Pipeline, we will have attributes on the vertex and fragment nodes which will allow us to customize the data they will display or process in the shader.
                    </li>
                    <li>
                        For this example I have downloaded from the official sahder graph examples a subgraph that recreates the texturization of some bricks, as we can see these have some input parameters that will allow to customize the final behavior of this subgraph
                    </li>
                    <li>
                        This subgraph outputs a floating value that will indicate whether the corresponding point belongs to a brick or a border, this value will correspond to the color of the grayscale fragment shader.
                    </li>
                    <li>
                        Likewise, the X position of the mouse is placed as input parameter and this will be connected directly to the tiling variable of the brick subgraph, in order to have a dynamic animation in the shader.
                    </li>
                     <li>
                        Now the corresponding material is created with this shader and applied to a cube.
                    </li>
                </ol>
            </p>
        </b-row>
        <b-row class="mt-4">
            <p>Let's see this graph in action!</p>
        </b-row>
        <b-row>
            <h2 class="mt-4">Code and Results</h2>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <SketchUnity 
                dataPath="scketch/Bricks/Build/Unity.data"
                loaderPath="scketch/Bricks/Build/Unity.loader.js"
                frameworkPath="scketch/Bricks/Build/Unity.framework.js"
                codePath="scketch/Bricks/Build/Unity.wasm"
                streamingAssetsPath="scketch/Bricks/StreamingAssets"
                companyName="Visual Computing"
                productName="Diffuse Reflection"
                productVersion="1.0"
                width="960"
                height="600"
                />
        </b-row>
        <b-row class="mt-4">
            <p>The following are the images of the resulting graphs</p>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col>
                <b-img thumbnail src="images/shader1.png" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col>
                <b-img thumbnail src="images/shader2.png" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row>
            <h2 class="mt-4">Discussion</h2>
        </b-row>
        <b-row>
            <p>The shader graph is a really useful framework that allows us to develop shaders without doing a single line of code in HLSL or GLSL, however this tool is not designed to generate optimized code. It would be interesting to measure times in which is faster, if designing a graph of a complex shader or writing the code directly in HLSL of the same shader.</p>
        </b-row>
        <b-row>
            <h2>Conclusion</h2>
        </b-row>
        <b-row>
            <p>This framework is great! it is very interesting how a shader can be seen as a graph, it is a good way to learn all the basic concepts of these artifacts, however we must not neglect the development directly in HLSL because that way we can optimize the code and create shaders more according to the devices in which we are designing.</p>
        </b-row>
    </b-container>
</template>

<script>
    import SketchUnity from '@/components/SketchUnity.vue';

    export default {
        name: "VisualIllusion",
        components: {
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