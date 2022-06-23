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
    let mask;

    p5.preload = () => {
        video_src = p5.createVideo(['https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.720p.vp9.webm']);
        video_src.hide();
        maskShader = p5.readShader('shaders/mask.frag', { varyings: p5.Tree.texcoords2 });
        //img = loadImage('/sketches/shaders/tree.jpeg');
        img = p5.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Fire_breathing_2_Luc_Viatour.jpg/800px-Fire_breathing_2_Luc_Viatour.jpg');
    }

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
        canvas.parent("vue-canvas-3");
        p5.noStroke();
        p5.textureMode(p5.NORMAL);
        video_on = p5.createCheckbox('video', false);
        video_on.parent("vue-canvas-3");
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
        video_on.position(10, 30);
        mask = p5.createCheckbox('ridges', false);
        mask.parent("vue-canvas-3");
        mask.position(10, 10);
        mask.style('color', 'white');
        p5.shader(maskShader);
        maskShader.setUniform('texture', img);
        p5.emitTexOffset(maskShader, img, 'texOffset');
    }

    p5.draw = () => {
        p5.background(0);
        if (mask.checked()) {
            //maskShader.setUniform('mask', [1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9, 1/9]);
            maskShader.setUniform('mask', [-1, -1, -1, -1, 8, -1, -1, -1, -1]);
            //maskShader.setUniform('mask', [0, -1, 0, -1, 5, -1, 0, -1, 0]);
        }
        else {
            maskShader.setUniform('mask', [0, 0, 0, 0, 1, 0, 0, 0, 0]);
        }
        p5.quad(-WIDTH / 2, -HEIGHT / 2, WIDTH / 2, -HEIGHT / 2, WIDTH / 2, HEIGHT / 2, -WIDTH / 2, HEIGHT / 2);
    }

}

export default sketch;

