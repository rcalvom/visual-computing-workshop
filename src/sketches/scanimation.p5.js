/**
 * Application of Scanimation visual illusion using p5.js
 * @param {*} p5 reference 
 */

const sketch = (p5) => {
    var speed = 2;
    var posX = 35;

    p5.setup = () => {
        const canvas = p5.createCanvas(1200, 500);
        canvas.parent("vue-canvas");
    }

    p5.draw = () => {
        p5.background(245);
        const degree = p5.frameCount * 3;
        const y = p5.sin(p5.radians(degree)) * 50;

        p5.push();
        p5.translate(0, p5.height / 2);
        p5.fill(66, 184, 131);
        p5.stroke(53, 73, 94);
        p5.strokeWeight(5);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();
        posX += speed;

        if (posX > p5.width - 35 || posX < 35) {
          speed *= -1;
        }
      };
}

export default sketch;

