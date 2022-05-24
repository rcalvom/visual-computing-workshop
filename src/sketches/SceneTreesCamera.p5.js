/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

import ml5 from 'ml5';

const sketch_camera = (p5) => {
    const width = 960;
    const height = 540;

    let color;
    let points = [];
    let cameraListeners = false;
    let handpose;
    let video;
    let predictions = [];

    let camera;

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(width, height, p5.WEBGL);
        canvas.parent("vue-canvas-2");
        p5.background("#1e1e1e");
        video = p5.createCapture(p5.VIDEO);
        video.size(width, height);

        // ml5 model
        handpose = ml5.handpose(video, () => {console.log("Model ready!");});
        handpose.on("predict", results => {
            predictions = results;
            // console.log(predictions);
        });
        video.hide();

        // Camera definition
        let state = {
            distance: 250,
            center: [0, 0, 0],
            rotation: [0, 0, 0, 1],
        };
        camera = p5.createEasyCam();
        camera.state_reset = state;
        camera.setState(state, 2000);
        camera.removeMouseListeners();
        p5.perspective();

        // Color picker definition
        color = p5.createColorPicker('#FFFFFF');
        color.parent("vue-canvas-2");
    }

    p5.draw = () => {
        p5.update();
        p5.background("#1e1e1e");
        p5.push();
        p5.strokeWeight(0.1);
        p5.stroke("#FFFFFF");
        p5.grid({ dotted: false });
        p5.pop();
        p5.axes();
        for (const point of points) {
            p5.push();
            p5.translate(point.worldPosition);
            sphereBrush(point);
            p5.pop();
        }
    }

    p5.update = () => {
        if((p5.keyIsPressed && p5.keyCode === p5.CONTROL)){
            if(!cameraListeners){
                camera.attachMouseListeners();
                cameraListeners = !cameraListeners;
            }
        }
        if(!(p5.keyIsPressed && p5.keyCode === p5.CONTROL)){
            if(cameraListeners){
                camera.removeMouseListeners();
                cameraListeners = !cameraListeners;
            }
        }
        if (p5.keyIsPressed && p5.keyCode === p5.SHIFT) {
            if (!cameraListeners) {
                for (let i = 0; i < predictions.length; i += 1) {
                    const keypoint = predictions[i].landmarks[8];
                    let max_depth = 60;
                    let min_depth = -10;
                    let depth = keypoint[2];
                    depth -= min_depth;
                    depth /= max_depth - min_depth;
                    points.push({
                        worldPosition: p5.treeLocation([width - keypoint[0] - width / 4, keypoint[1], depth], { from: 'SCREEN', to: 'WORLD' }),
                        color: color.color()
                    });
                }
            }
        }
    }

    p5.keyPressed = () => {
        if(p5.key == 'c'){
            points = [];
        }
    }

    let sphereBrush = (point) => {
        p5.push();
        p5.noStroke();
        p5.fill(point.color);
        p5.sphere(1);
        p5.pop();
    }

}

export default sketch_camera;

