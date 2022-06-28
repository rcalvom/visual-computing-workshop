/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
    const WIDTH = 960;
    const HEIGHT = 540;

    let uvShader;
    let type = 0;
    let shapeType = 0;
    let selector;
    let shape;

    p5.preload = () => {
        //console.log(p5.texcoords2);
        uvShader = p5.readShader('shaders/uv.frag', { matrices: p5.Tree.pMatrix | p5.Tree.mvMatrix, varyings: p5.Tree.texcoords2 });
        
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
        selector = p5.createSelect();
        selector.parent("vue-canvas-1");
        selector.position(100, 80);
        selector.option("RG");
        selector.option("GB");
        selector.option("RB");
        selector.selected("RG");
        selector.changed(() => {
            let item = selector.value();
            if (item === "RG") {
                type = 0;
            } else if (item === "GB") {
                type = 1;
            } else if (item === "RB") {
                type = 2;
            }
            uvShader.setUniform('type', type);
        });
        shape = p5.createSelect();
        shape.parent("vue-canvas-1");
        shape.position(100, 120);
        shape.option("Square");
        shape.option("Circle");
        shape.option("Triangle");
        shape.selected("Square");
        shape.changed(() => {
            let item = shape.value();
            if (item === "Square") {
                shapeType = 0;
            } else if (item === "Circle") {
                shapeType = 1;
            } else if (item === "Triangle") {
                shapeType = 2;
            }
        })
    }

    p5.draw = () => {
        p5.background(0);
        // clip-space quad (i.e., both x and y vertex coordinates ∈ [-1..1])
        // https://p5js.org/reference/#/p5/quad
        // It's worth noting (not mentioned in the api docs) that the quad
        // command also adds the texture coordinates to each of its vertices.
        if (shapeType == 0) {
            p5.quad(-WIDTH / 2, -HEIGHT / 2, WIDTH / 2, -HEIGHT / 2, WIDTH / 2, HEIGHT / 2, -WIDTH / 2, HEIGHT / 2);
        } else if (shapeType == 1) {
            p5.circle(0, 0, HEIGHT);
            p5.circle(0.5, 0.5, HEIGHT);
        } else if (shapeType == 2) {
            // let v1 = p5.Vector.random2D();
            // let v2 = p5.Vector.random2D();
            // let v3 = p5.Vector.random2D();
            p5.triangle(-WIDTH/4, HEIGHT/2, 0, -HEIGHT/2, WIDTH/4, HEIGHT/2);
            // p5.beginShape(p5.TRIANGLES);
            // p5.vertex(v1.x, v1.y);
            // p5.vertex(v2.x, v2.y);
            // p5.vertex(v3.x, v3.y);
            // p5.endShape();
        }
    }

}

export default sketch;

