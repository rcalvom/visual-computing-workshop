<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Image Processing</h1>
        </b-row>
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p class="text-justify">
                Digital image processing is the use of a digital computer to process digital images through an algorithm.[1][2] As a subcategory or field of digital signal processing, digital image processing has many advantages over analog image processing. It allows a much wider range of algorithms to be applied to the input data and can avoid problems such as the build-up of noise and distortion during processing. Since images are defined over two dimensions (perhaps more) digital image processing may be modeled in the form of multidimensional systems. The generation and development of digital image processing are mainly affected by three factors: first, the development of computers; second, the development of mathematics (especially the creation and improvement of discrete mathematics theory); third, the demand for a wide range of applications in environment, agriculture, military, industry and medical science has increased.
            </p>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>Ridge detection</h3>
            <p class="text-justify">In image processing, ridge detection is the attempt, via software, to locate ridges in an image, defined as curves whose points are local maxima of the function, akin to geographical ridges.
For a function of N variables, its ridges are a set of curves whose points are local maxima in N − 1 dimensions. In this respect, the notion of ridge points extends the concept of a local maximum. Correspondingly, the notion of valleys for a function can be defined by replacing the condition of a local maximum with the condition of a local minimum. The union of ridge sets and valley sets, together with a related set of points called the connector set, form a connected set of curves that partition, intersect, or meet at the critical points of the function. This union of sets together is called the function's relative critical set.</p>
            <b-img thumbnail center width="500" src="https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs12046-019-1138-5/MediaObjects/12046_2019_1138_Fig9_HTML.jpg"></b-img>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>Sharpen effect</h3>
            <p class="text-justify">A sharpening filter makes the transition between the various regions present in an image more obvious rather than being smooth. As an image passes through a sharpening filter the brighter pixels are boosted as relative to its neighbors.</p>
            <b-img thumbnail center width="500" src="https://i.stack.imgur.com/1yRRJ.png"></b-img>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>Box blur filter</h3>
            <p class="text-justify">A box blur (also known as a box linear filter) is a spatial domain linear filter in which each pixel in the resulting image has a value equal to the average value of its neighboring pixels in the input image. It is a form of low-pass ("blurring") filter.</p>
            <b-img thumbnail center width="500" src="https://miro.medium.com/max/1400/1*DUut28QltnpM2d3MAQQhGw.png"></b-img>
        </b-row>
        <b-row>
            <h3>Results</h3>
        </b-row>
        <b-col>
            <h3>Image/Video Processing App</h3>
            <SketchP5 :sketch="first_sketch" class="mt-4" :width="960" :heigth="640" :index="'-1'"/>
        </b-col>
        <b-col>
            <h3>Magnifier</h3>
            <SketchP5 :sketch="second_sketch" class="mt-4" :width="960" :heigth="640" :index="'-2'"/>
        </b-col>
        <!-- <b-row>
            <h2>Discussion</h2>
            <p class="text-justify">
                This work applies the concept of scene trees using different devices to interact with a 3D brush (wacom tablet and webcam). The input is transformed from screen space to world space using the library p5.treegl which performs several matrices operations to achieve this result. The main idea behind this work is the relation between a 2D space with a 3D space using a third input corresponding to the z-axis which allow us tranform points coordinates depending on whether them are going to be displayed. This principle is applied in different sectors that work on computer graphics, it is common to see scene trees implemented in such a way that they are both time and memory efficient.
            </p>
        </b-row>
        <b-row>
            <h2>Conclusion</h2>
            <ul>
                <li>Scene trees are a important data structure that allow tranform operations between different spaces using matrices operations.</li>
                <li>Scene trees are applied in several fields, especially in game development where characters interact in different worlds that have multiple objects contributing across different perspectives.</li>
                <li>Scene trees recreate the geometry of the real world by abstracting the actors to objects with perspective properties and attributes.</li>
            </ul>
        </b-row> -->
    </b-container>
</template>

<script>
    import image_processing from '../sketches/image_processing.p5';
    import magnifier from '../sketches/magnifier.p5'
    import SketchP5 from '../components/SketchP5.vue';

    // import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";

    export default {
        name: "VisualIllusion",
        components: {
            SketchP5,
            // CodeHighlight
        },
        data(){
            return {
                stroke: true,
                grid: true,
                antialiasing: true,
                first_sketch: image_processing,
                second_sketch: magnifier
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