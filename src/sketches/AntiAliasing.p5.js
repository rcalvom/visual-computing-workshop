/**
 * Application of Scanimation visual illusion using p5.js
 * @param {p5} p5 reference 
 */

 const sketch = (p5) => {
    const ROWS = 20;
    const COLS = 20;
    const LENGTH = 20;
    let quadrille;
    let canvas;
    let vertex1X/*, vertex1Y, vertex2X, vertex2Y, vertex3X, vertex3Y;*/

    p5.setup = () => {
        canvas = p5.createCanvas(COLS * LENGTH, ROWS * LENGTH);
        canvas.parent("vue-canvas");

        quadrille = p5.createQuadrille(ROWS, COLS);
        p5.background('#060621');

        vertex1X = p5.createInput('', 'number')
        vertex1X.parent("vue-canvas");
        vertex1X.elt.max = COLS;
        vertex1X.elt.min = 1;
    }

    p5.draw = () => {
        p5.drawQuadrille(quadrille, { cellLength: LENGTH, outline: 'green', board: true });
        quadrille.rasterizeTriangle(2, 5, 10, 7, 15, 18, colorize_shader, [255, 0, 0, 7, 4], [0, 255, 0, -1, -10], [0, 0, 255, 5, 8]);
        //console.log(quadrille._barycentric_coords());
        
    }

    p5.keyPressed = () => {
        
    }

    function colorize_shader({ pattern: mixin }) {
        let rgb = mixin.slice(0, 3);
        return p5.color(rgb);
      }
  
  }
  
  export default sketch;
  
  