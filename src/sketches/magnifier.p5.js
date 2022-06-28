/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

 const sketch = (p5) => {
    const WIDTH = 960;
    const HEIGHT = 540;

    let maskShader;
    let img;
    let video_src;
    let video_on;
    let radius;
    let magnifier;

    p5.preload = () => {
        video_src = p5.createVideo(['https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.720p.vp9.webm']);
        video_src.hide();
        maskShader = p5.readShader('shaders/magnifier.frag', { matrices: p5.Tree.pMatrix | p5.Tree.mvMatrix, varyings: p5.Tree.texcoords2 });
        //img = loadImage('/sketches/shaders/tree.jpeg');
        img = p5.loadImage('images/fire_breathing.jpg');
    }

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
        canvas.parent("vue-canvas-2");
        p5.noStroke();
        p5.textureMode(p5.NORMAL);
        video_on = p5.createCheckbox('Video', false);
        video_on.parent("vue-canvas-2");
        video_on.style('color', 'white');
        video_on.changed(() => {
            if (video_on.checked()) {
                maskShader.setUniform('texture', video_src);
                video_src.loop();
            } else {
                maskShader.setUniform('texture', img);
                video_src.pause();
            }
        });
        video_on.position(100, 80);

        radius = p5.createSlider(20, 200, 20);
        radius.parent("vue-canvas-2");
        radius.position(100, 160);
        radius.style('width', '80px');

        magnifier = p5.createCheckbox('Magnifier', false);
        magnifier.parent("vue-canvas-2");
        magnifier.style('color', 'white');
        magnifier.changed(() => {
            if (magnifier.checked()) {
                maskShader.setUniform('magnifier', true);
            } else {
                maskShader.setUniform('magnifier', false);
            }
        });
        magnifier.position(100, 120);
        
        p5.shader(maskShader);
        maskShader.setUniform('grey_scale', false);
        maskShader.setUniform('radius', 20.0);
        maskShader.setUniform('scale', 1.0);
        maskShader.setUniform('texture', img);
        maskShader.setUniform('resolution_x', WIDTH);
        maskShader.setUniform('resolution_y', HEIGHT);
        p5.emitTexOffset(maskShader, img, 'texOffset');
    }

    p5.draw = () => {
        p5.background(0);
        p5.quad(-WIDTH / 2, -HEIGHT / 2, WIDTH / 2, -HEIGHT / 2, WIDTH / 2, HEIGHT / 2, -WIDTH / 2, HEIGHT / 2);
        maskShader.setUniform('mouse_x', p5.mouseX);
        maskShader.setUniform('mouse_y', HEIGHT - p5.mouseY);
        maskShader.setUniform('radius', radius.value());
    }

}

export default sketch;

