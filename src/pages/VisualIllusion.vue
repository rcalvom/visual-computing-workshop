<template>
    <b-container>
        <h1>Scanimation</h1>
        <h2>Introduction</h2>
        <h2>Literature Review</h2>
        <h2>Methods</h2>
        <h2>Code and Results</h2>
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
        <h2>Discussion</h2>
        <h2>Conclusion</h2>
    </b-container>
</template>

<script>
    import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/prism-dark.css";

    export default {
        name: "VisualIllusion",
        components: {
            CodeHighlight
        },
        data(){
            return {
                code: ''
            }
        }
    };
</script>
