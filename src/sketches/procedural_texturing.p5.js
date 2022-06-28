/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

 const sketch = (p5) => {
    const WIDTH = 960;
    const HEIGHT = 540;

    let pg;
    let truchetShader;

    p5.preload = () => {
        truchetShader = p5.readShader('shaders/truchet.frag', { matrices: p5.Tree.NONE, varyings: p5.Tree.NONE });
    }

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
        canvas.parent("vue-canvas-1");
        truchetShader.setUniform('resolution_x', WIDTH);
        truchetShader.setUniform('resolution_y', HEIGHT);
        pg = p5.createGraphics(WIDTH, HEIGHT, p5.WEBGL);
        p5.textureMode(p5.NORMAL);
        p5.noStroke();
        pg.noStroke();
        pg.textureMode(p5.NORMAL);
        pg.shader(truchetShader);
        // pg.emitResolution(truchetShader);
        truchetShader.setUniform('u_time', 0.1);
        pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
        // set pg as texture
        p5.texture(pg);
    }

    p5.draw = () => {
        p5.background(33);
        p5.orbitControl();
        p5.cylinder(100, 200);
    }

    p5.mouseMoved = () => {
        // https://p5js.org/reference/#/p5.Shader/setUniform
        truchetShader.setUniform('u_time', p5.int(p5.map(p5.mouseX, 0, p5.width, 1, 30)));
        truchetShader.setUniform('mouse_x', p5.mouseX);
        truchetShader.setUniform('mouse_y', p5.mouseY);
        // pg clip-space quad (i.e., both x and y vertex coordinates ∈ [-1..1])
        pg.quad(-1, -1, 1, -1, 1, 1, -1, 1);
    } 

}

export default sketch;

