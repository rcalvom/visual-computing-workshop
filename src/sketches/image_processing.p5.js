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
    let selector;
    let selector2;
    let region;
    let radius;
    let type;

    let identity_kernel = [0, 0, 0, 0, 1, 0, 0, 0, 0];
    let ridge_kernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1];
    let sharpen_kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];
    let box_blur_kernel = [1/9, 1/9, 1/9, 1/9, 1/3, 1/9, 1/9, 1/9, 1/9];
    let gaussian_blur_kernel = [1/16, 1/8, 1/16, 1/8, 1, 1/8, 1/16, 1/8, 1/16];

    p5.preload = () => {
        video_src = p5.createVideo(['https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.720p.vp9.webm']);
        video_src.hide();
        maskShader = p5.readShader('shaders/mask.frag', { matrices: p5.Tree.pMatrix | p5.Tree.mvMatrix, varyings: p5.Tree.texcoords2 });
        //img = loadImage('/sketches/shaders/tree.jpeg');
        img = p5.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Fire_breathing_2_Luc_Viatour.jpg/800px-Fire_breathing_2_Luc_Viatour.jpg');
    }

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(WIDTH, HEIGHT, p5.WEBGL);
        canvas.parent("vue-canvas-1");
        p5.noStroke();
        p5.textureMode(p5.NORMAL);
        video_on = p5.createCheckbox('Video', false);
        video_on.parent("vue-canvas-1");
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
        video_on.position(100, 160);

        radius = p5.createSlider(20, 200, 20);
        radius.parent("vue-canvas-1");
        radius.position(100, 240);
        radius.style('width', '80px');

        region = p5.createCheckbox('Region of interest', false);
        region.parent("vue-canvas-1");
        region.style('color', 'white');
        region.changed(() => {
            if (region.checked()) {
                maskShader.setUniform('region', true);
            } else {
                maskShader.setUniform('region', false);
            }
        });
        region.position(100, 200);
        
        selector = p5.createSelect();
        selector.parent("vue-canvas-1");
        selector.position(100, 80);
        selector.option("Identity Kernel");
        selector.option("Ridge Kernel");
        selector.option("Sharpen Kernel");
        selector.option("Box Blur Kernel");
        selector.option("Gaussian Blur Kernel");
        selector.selected("Identity Kernel");
        selector.changed(() => {
            let item = selector.value();
            if (item === "Identity Kernel") {
                maskShader.setUniform('mask', identity_kernel);
            } else if (item === "Ridge Kernel") {
                maskShader.setUniform('mask', ridge_kernel);
            } else if (item === "Sharpen Kernel") {
                maskShader.setUniform('mask', sharpen_kernel);
            } else if (item === "Box Blur Kernel") {
                maskShader.setUniform('mask', box_blur_kernel);
            } else if (item === "Gaussian Blur Kernel") {
                maskShader.setUniform('mask', gaussian_blur_kernel);
            }
        });
        selector2 = p5.createSelect();
        selector2.parent("vue-canvas-1");
        selector2.position(100, 120);
        selector2.option("Original");
        selector2.option("Luma");
        selector2.option("HSV");
        selector2.option("HSL");
        selector2.selected("RG");
        selector2.changed(() => {
            let item = selector2.value();
            if (item === "Original") {
                type = 0;
                maskShader.setUniform('grey_scale', false);
            } else if (item === "Luma") {
                type = 1;
                maskShader.setUniform('grey_scale', true);
            } else if (item === "HSV") {
                type = 2;
                maskShader.setUniform('grey_scale', true);
            } else if (item === "HSL") {
                type = 3;
                maskShader.setUniform('grey_scale', true);
            }
            maskShader.setUniform('type', type);
        });
        p5.shader(maskShader);
        maskShader.setUniform('grey_scale', false);
        maskShader.setUniform('radius', 20.0);
        maskShader.setUniform('mask', identity_kernel);
        maskShader.setUniform('texture', img);
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

