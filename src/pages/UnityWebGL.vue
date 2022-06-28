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
        <b-row class="mt-4">
            <h3>Example Scketch in P5.js</h3>
        </b-row>
        <b-row>
            <b-col cols="12" class="mb-4">
                <SketchP5 :sketch="sketch" class="mt-4" :width=960 :heigth=600 />
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <h3>Example Scketch in Unity</h3>
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
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                As you can see this small example looks exactly the same in both platforms, with this we want to show how both platforms have a great versatility to represent graphics.
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                Now, I want to show the source codes of both sketches to show the great similarity and their few differences. Here we will notice that p5.js is written in javascript while Unity is written in C#.
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <b-col cols="6" class="mb-4">
                <h3>Source Code P5.js</h3>
                <div>
                    <code-highlight language="javascript">
                        <pre>
/**
* Simple sketch created to compare with unity
* @param {p5} p5 reference 
*/

const sketch = (p5) => {

    let x = 0;
    let dim = 80.0;

    let width = 960
    let height = 600

    p5.setup = () => {
        p5.createCanvas(960, 600).parent("vue-canvas");
        p5.noStroke();
    }

    p5.draw = () => {
        p5.background(102);
        x = x + 30 * p5.deltaTime / 1000;
        if (x > width + dim) {
            x = -dim;
        }
        p5.translate(x, height / 2 - dim / 2);
        p5.fill(255);
        p5.rect(-dim / 2, -dim / 2, dim, dim);

        p5.translate(x, dim);
        p5.fill(0);
        p5.rect(-dim / 2, -dim / 2, dim, dim);
    }
}
export default sketch;
                        </pre>
                    </code-highlight>
                </div>
            </b-col>
            <b-col cols="6" class="mb-4">
                <h3>Source Code Unity</h3>
                <div>
                    <code-highlight language="csharp">
                        <pre>
using UnityEngine;
using UnityEngine.UI;

public class UnityComparation : MonoBehaviour{

    public GameObject canvas;
    public GameObject whiteSquare;
    public GameObject blackSquare;

    private float x = 0;
    private readonly float dim = 80.0f;

    private readonly int width = 960;
    private readonly int height = 600;

    private void Start() {
        this.canvas.GetComponent&lt;Canvas>().renderMode = RenderMode.ScreenSpaceCamera;
        this.canvas.GetComponent&lt;RectTransform>().sizeDelta = new Vector2(this.width, this.height);
        this.canvas.GetComponent&lt;Image>().color = new Color(102.0f / 255, 102.0f / 255, 102.0f / 255);

        this.whiteSquare.GetComponent&lt;RectTransform>().anchoredPosition = new Vector3(0, -this.height / 2 + this.dim);
        this.whiteSquare.GetComponent&lt;RectTransform>().sizeDelta = new Vector2(this.dim, this.dim);
        this.whiteSquare.GetComponent&lt;Image>().color = Color.white;

        this.blackSquare.GetComponent&lt;RectTransform>().anchoredPosition = new Vector3(0, -this.height / 2);
        this.blackSquare.GetComponent&lt;RectTransform>().sizeDelta = new Vector2(this.dim, this.dim);
        this.blackSquare.GetComponent&lt;Image>().color = Color.black;
    }

    private void Update() {
        this.x += 30 * Time.deltaTime;
        if (this.x > this.width + this.dim) {
            this.x = -this.dim;
        }
        this.whiteSquare.GetComponent&lt;RectTransform>().anchoredPosition = new Vector3(this.x, -this.height / 2 + this.dim);
        this.blackSquare.GetComponent&lt;RectTransform>().anchoredPosition = new Vector3(2 * this.x, -this.height / 2);

    }
}
                        </pre>
                    </code-highlight>
                </div>
            </b-col>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                As you can see, The Code has quite a few similarities. Just as p5.js has the "Setup" and "Draw" functions, Unity has the "Start" and "Update" functions that do exactly the same thing. It is also worth noting that Unity uses a typed language that has more use of Object Oriented Programming which greatly facilitates development.
            </p>
        </b-row>
        <b-row class="mt-4">
            <h2>How unity works?</h2>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                Unity is a multiplatform videogame engine, so its main objective is that with the same code base can be compiled for any device, they have chosen the development in C# because this language being so high level allows native compilations to low level languages.
            </p>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
            In the case of WebGL, Unity recommends the development of shaders using HLSL, which is the proprietary standard of Microsoft, Unity has a translator to convert these shaders in HLSL to GLSL in order to have compatibility in the shaders. In the same way they have a technology called IL2CPP with which they translate the sketch from C# to C++ to make native exports, in the case we are interested in, they translate from C# to C++ and from C++ to javascript.
            </p>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col align-self="center">
                <b-img center thumbnail src="https://docs.unity3d.com/es/530/uploads/Main/il2cppInfrastructure.png" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <h2>Conclusion</h2>
        </b-row>
        <b-row align-h="start" align-v="start" class="mt-4">
            <p class="text-justify">
                Unity is a very powerful tool that allows us to do whatever we want in the graphical part at a high level for the platform we want, however by developing at a high level we are moving away from the basics of computer graphics.
            </p>
        </b-row>
    </b-container>
</template>

<script>
    import SketchUnity from '@/components/SketchUnity.vue';
    import SketchP5 from '../components/SketchP5.vue';

    import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";
    import 'prism-es6/components/prism-markup-templating';
    import 'prism-es6/components/prism-csharp';

    import UnityIntroduction from '@/sketches/unity-introduction.p5'
    export default {
        name: "UnityWebGL",
        components: {
            SketchP5,
            SketchUnity,
            CodeHighlight
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