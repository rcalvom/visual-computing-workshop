<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Scanimation</h1>
        </b-row>
        <b-row align-content="center" align-h="center" align-v="center">
            <b-col>
            <b-img thumbnail src="https://i.pinimg.com/originals/e1/1e/a2/e11ea206d25d6a1f1bd1b76fbdedcbe9.gif" class="mt-4"/>
            </b-col>
            <b-col>
                <b-img thumbnail src="https://i.pinimg.com/originals/71/d3/56/71d356f86a3e680de19975653d56308c.gif" class="mt-4"/>
            </b-col>
        </b-row>
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p class="text-justify">Scanimation is a type of barrier-grid animation which is an effect created by moving a striped transparent overlay across an interlaced image.
            It is also known as kinegram which comes from "kine-" meaning "moving" and "-gram" meaning "drawing". This technique originated in the late 1890s, overlapping with the development of parallax stereography (Reliephographie) for 3D autostereograms. The technique has also been used for color-changing pictures, but to a much lesser extent.
            The objective of this workshop is to illustrate how to use this principle to generate apparently moving images from a set of frames selected by the user.</p>
        </b-row>
        <b-row>
            <h2 class="mt-4">Literature review</h2>
        </b-row>
        <b-row>
            <b-col>
                <br/>
                <ul>
                    <li>Motograph</li>
                    <li>Auguste Berthier's autostereograms</li>
                    <li>Frederic Ives' parallax stereogram <span>&#38;</span> changeable picture</li>
                    <li>Eugene Estanave's animated autostereograms</li>
                    <li>Magic moving picture cards</li>
                    <li>Ombro-Cinema</li>
                    <li>Maurice Bonnet's reliephographie</li>
                    <li>Autostereoscopic cinema</li>
                    <li>Kinegram</li>
                    <li>Scanimation</li>
                </ul>
            </b-col>
        </b-row>
        <b-row>
            <p></p>
        </b-row>
        <b-row>
            <h2>Methods</h2>
        </b-row>
        <b-row>
            <b-col>
            <p>The process of creating this ilussion can be splited in the next steps:</p>
            <ol>
                <li>Decide what to animate. It may be an abstract pattern, a cartoon, or a <u>sequence of photos</u>. Here are some hints about which kind of images work best.</li>
                <ul>
                    <li>It's best to use bright, bold, high-contrast images with no small details. This is because only thin slivers of the image are visible through the striped overlay.</li>
                    <li>It's best if the animation is cyclic, beginning and ending at the same position.</li>
                    <li>It's best if the animation makes sense both forward and backward as you move the overlay back and forth.</li>
                    <li>It's best if no part of the image moves too much between frames.</li>
                    <li>The easiest animations are made of rigid shapes that merely move, rotate, expand/contract, or change colors.</li>
                </ul>
                <li>Set the parameters.</li>
                <ul>
                    <li>Decide on the animation cycle length.</li>
                    <li>Decide on the grid unit size.</li>
                    <li>Decide on the overall size of the images.</li>
                    <li>Decide whether the stripes will be horizontal or vertical.</li>
                </ul>
                <li>Make the animation. Make one picture for each frame of the animation. For example, if you want an animation of a spoked wheel turning, make pictures of the wheel at different angles for each frame. If you want an animation of an animal running, make pictures of the animal at different points in its stride.</li>
                <li>Interlace the frames, it can be made using a software like p5.js</li>
                <li>View the kinegram by moving the overlay over the generated picture.</li>
            </ol>
            </b-col>
        </b-row>
        <b-row>
            <h2>Code and Results</h2>
        </b-row>
        <b-row>
            <SketchP5 :sketch="sketch" class="mt-4"/>
        </b-row>
        <div>
            <code-highlight language="javascript">
                <pre>
                    // Global Variable Declarations
                    let c = {
                        "width": 400,
                        "height": 400
                    };

                    let cx = c.width / 2, cy = c.height / 2,
                        img,
                        spacing = 10,
                        weight = 9,
                        speed=0;

                    function preload() {
                    // img = loadImage('image.png');
                    img = loadImage('image.png');
                    }

                    // Setting up the Canvas
                    function setup() {
                    let canvas = createCanvas(c.width, c.height);
                    canvas.parent('sketch-holder');
                    }

                    // Where the Magic Happens (It draws)
                    function draw() {
                    background(0);
                    image(img, cx-250, cy-160, 500, 320);
                    stroke(0);
                    strokeWeight(weight);
                    speed+=.2;
                    if (speed >= 10) speed=0;
                    }
                </pre>
            </code-highlight>
        </div>
        <b-row>
            <h2>Discussion</h2>
        </b-row>
        <b-row>
            <p>To improve the current implementation of scanimation, we can use as input a video, We can take some frames of it to generate the scanimation picture. Also we can construct the overlay in vertical way, not only horizontal.</p>
        </b-row>
        <b-row>
            <h2>Conclusion</h2>
        </b-row>
        <b-row>
            <p>Scanimation is a good way to create simple animations using static images, the film industry had started using this principle of create the first movies, the praxinoscope has used blinking light to simulate the scanimation overlay and an a sequence of frames.</p>
        </b-row>
    </b-container>
</template>

<script>
    import Scanimation from '../sketches/scanimation.p5.js';

    import SketchP5 from '../components/SketchP5.vue';

    import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/prism-dark.css";

    export default {
        name: "VisualIllusion",
        components: {
            SketchP5,
            CodeHighlight
        },
        data(){
            return {
                sketch: Scanimation
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