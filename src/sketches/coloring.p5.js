/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
    const WIDTH = 960;
    const HEIGHT = 540;

    let uvShader;

    p5.preload = () => {
        console.log(p5.readShader);
        uvShader = p5.readShader('shaders/uv.frag', { matrices: p5.NONE, varyings: p5.texcoords2 });
        console.log(uvShader);
    }

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
        canvas.parent("vue-canvas-1");
        p5.noStroke();
        // see: https://p5js.org/reference/#/p5/shader
        p5.shader(uvShader);
        // https://p5js.org/reference/#/p5/textureMode
        // best and simplest is to just always used NORMAL
        p5.textureMode(p5.NORMAL);
    }

    p5.draw = () => {
        p5.background(0);
        // clip-space quad (i.e., both x and y vertex coordinates ∈ [-1..1])
        // https://p5js.org/reference/#/p5/quad
        // It's worth noting (not mentioned in the api docs) that the quad
        // command also adds the texture coordinates to each of its vertices.
        p5.quad(-1, -1, 1, -1, 1, 1, -1, 1);
        // triangle(-1, -1, -1, 1, -1, 0);
        // circle(-1, -1, 2);
    }

}

export default sketch;

