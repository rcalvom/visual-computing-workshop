/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

 const sketch = (p5) => {
    const WIDTH = 960;
    const HEIGHT = 540;

    let lumaShader;
    let img;
    let grey_scale;

    p5.preload = () => {
        lumaShader = p5.readShader('shaders/luma.frag', { varyings: p5.Tree.texcoords2 });
        img = p5.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Fire_breathing_2_Luc_Viatour.jpg/800px-Fire_breathing_2_Luc_Viatour.jpg');
    }

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
        canvas.parent("vue-canvas-2");
        p5.noStroke();
        p5.shader(lumaShader);
        p5.textureMode(p5.NORMAL);
        grey_scale = p5.createCheckbox('luma', false);
        grey_scale.parent("vue-canvas-2")
        grey_scale.position(10, 10);
        grey_scale.style('color', 'white');
        grey_scale.input(() => lumaShader.setUniform('grey_scale', grey_scale.checked()));
        lumaShader.setUniform('texture', img);
    }

    p5.draw = () => {
        p5.background(0);
        p5.quad(-WIDTH / 2, -HEIGHT / 2, WIDTH / 2, -HEIGHT / 2, WIDTH / 2, HEIGHT / 2, -WIDTH / 2, HEIGHT / 2);
    }

}

export default sketch;

