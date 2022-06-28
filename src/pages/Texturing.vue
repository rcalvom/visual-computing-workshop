<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Texturing</h1>
        </b-row>
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>RGB color model</h3>
            <p class="text-justify">The RGB color model is an additive color model in which the red, green, and blue primary colors of light are added together in various ways to reproduce a broad array of colors. The name of the model comes from the initials of the three additive primary colors, red, green, and blue.
The main purpose of the RGB color model is for the sensing, representation, and display of images in electronic systems, such as televisions and computers, though it has also been used in conventional photography. Before the electronic age, the RGB color model already had a solid theory behind it, based in human perception of colors.
RGB is a device-dependent color model: different devices detect or reproduce a given RGB value differently, since the color elements (such as phosphors or dyes) and their response to the individual red, green, and blue levels vary from manufacturer to manufacturer, or even in the same device over time. Thus an RGB value does not define the same color across devices without some kind of color management.</p>
            <b-img thumbnail center src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/RGB_color_solid_cube.png/220px-RGB_color_solid_cube.png"></b-img>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>Luma</h3>
            <p class="text-justify">In video, luma represents the brightness in an image (the "black-and-white" or achromatic portion of the image). Luma is typically paired with chrominance. Luma represents the achromatic image, while the chroma components represent the color information. Converting R′G′B′ sources (such as the output of a three-CCD camera) into luma and chroma allows for chroma subsampling: because human vision has finer spatial sensitivity to luminance ("black and white") differences than chromatic differences, video systems can store and transmit chromatic information at lower resolution, optimizing perceived detail at a particular bandwidth.</p>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>HSV and HSL color models</h3>
            <p class="text-justify">HSL (for hue, saturation, lightness) and HSV (for hue, saturation, value; also known as HSB, for hue, saturation, brightness) are alternative representations of the RGB color model, designed in the 1970s by computer graphics researchers to more closely align with the way human vision perceives color-making attributes. In these models, colors of each hue are arranged in a radial slice, around a central axis of neutral colors which ranges from black at the bottom to white at the top.
The HSL representation models the way different paints mix together to create color in the real world, with the lightness dimension resembling the varying amounts of black or white paint in the mixture (e.g. to create "light red", a red pigment can be mixed with white paint; this white paint corresponds to a high "lightness" value in the HSL representation). Fully saturated colors are placed around a circle at a lightness value of ½, with a lightness value of 0 or 1 corresponding to fully black or white, respectively.</p>
            <b-img thumbnail center width="500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hsl-hsv_models.svg/1024px-Hsl-hsv_models.svg.png"></b-img>
        </b-row>
        <b-row>
            <h2>Results</h2>
        </b-row>
        <b-col>
            <h3>UV Visualization</h3>
            <SketchP5 :sketch="first_sketch" class="mt-4" :width="960" :heigth="640" :index="'-1'"/>
        </b-col>
        <b-col>
            <h3>Texture Sampling</h3>
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
    import uv from '../sketches/uv.p5';
    import texturing from '../sketches/texturing.p5';
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
                first_sketch: uv,
                second_sketch: texturing
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