/**
 * Simple sketch created to compare with unity
 * @param {p5} p5 reference 
 */

 const sketch = (p5) => {

    let x = 0;
    let dim = 80.0;

    let width = 960
    let height = 600

    p5.setup = () => {
        p5.createCanvas(960, 600).parent("vue-canvas");
        p5.noStroke();
    }

    p5.draw = () => {
        p5.background(102);
        x = x + 30 * p5.deltaTime / 1000;
        if (x > width + dim) {
            x = -dim;
        }
        p5.translate(x, height / 2 - dim / 2);
        p5.fill(255);
        p5.rect(-dim / 2, -dim / 2, dim, dim);

        p5.translate(x, dim);
        p5.fill(0);
        p5.rect(-dim / 2, -dim / 2, dim, dim);
    }
  
  }
  
  export default sketch;
  
  