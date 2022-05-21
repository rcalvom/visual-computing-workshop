// Presure.js
import Pressure from 'pressure';

//import THREE from '../../libs/aframe-space-navigator-controls';

/**
 * Application of Scene Tree using as input a Wacom stylus p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
    const width = 960;
    const height = 540;

    let color;
    let points = [];
    let pressure = 0;
    let cameraListeners = false;

    let camera;

    /*var options = {
        rollEnabled: false,
        movementEnabled: true,
        lookEnabled: true,
        invertPitch: false,
        fovEnabled: false,
        fovMin: 2,
        fovMax: 115,
        rotationSensitivity: 0.05,
        movementEasing: 3,
        movementAcceleration: 700,
        fovSensitivity: 0.01,
        fovEasing: 3,
        fovAcceleration: 5,
        invertScroll: false
      }*/

    p5.setup = () => {
        // Canvas definition
        let canvas = p5.createCanvas(width, height, p5.WEBGL);
        canvas.parent("vue-canvas");
        p5.background("#1e1e1e");

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
        color.parent("vue-canvas");

        // Pressure event suscription
        Pressure.set('#vue-canvas', {
            change: function(force){
                pressure = force;
            }
        });
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
        //var controls = THREE(options);
        //console.log(controls)
        if((p5.keyIsPressed && p5.keyCode === p5.CONTROL)){
        //if((p5.mouseIsPressed && p5.mouseButton === p5.CENTER)){    
            if(!cameraListeners){
                camera.attachMouseListeners();
                cameraListeners = !cameraListeners;
            }
        }
        if(!(p5.keyIsPressed && p5.keyCode === p5.CONTROL)){
        //if(!(p5.mouseIsPressed && p5.mouseButton === p5.CENTER)){
            if(cameraListeners){
                camera.removeMouseListeners();
                cameraListeners = !cameraListeners;
            }
        }
        if(p5.mouseIsPressed && p5.mouseButton === p5.LEFT){
            if(!cameraListeners){
                let dx = p5.abs(p5.mouseX - p5.pmouseX);
                let dy = p5.abs(p5.mouseY - p5.pmouseY);
                let speed = p5.constrain((dx + dy) / (2 * (width - height)), 0, 1);
                points.push({
                    worldPosition: p5.treeLocation([p5.mouseX, p5.mouseY, pressure], { from: 'SCREEN', to: 'WORLD' }),
                    color: color.color(),
                    speed: speed
                }); 
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
        p5.sphere(point.speed * 20 > 20 ? 20 : point.speed * 20);
        p5.pop();
    }

}

export default sketch;

