// Presure.js
import Pressure from 'pressure';

/**
 * Application of Scanimation visual illusion using p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
    let canvas;
    let z = 1;

    p5.setup = () => {
        canvas = p5.createCanvas(960, 540, p5.WEBGL);
        canvas.parent("vue-canvas");
        p5.background("#1e1e1e");
        Pressure.set('#vue-canvas', {
            change: function(force){
                z = force;
            }
        });
    }

    p5.draw = () => {
        p5.background("#1e1e1e");
        p5.translate(p5.mouseX - 960/2, p5.mouseY - 540/2, z*500);
        p5.sphere(40);
    }

}

export default sketch;

