/**
 * Application of Scanimation visual illusion using p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
    let canvas;
    let input;
  
    p5.setup = () => {
        canvas = p5.createCanvas(720, 450);
        canvas.parent("vue-canvas");
        input = p5.createFileInput(handleFileLoad, true);
        input.parent("vue-canvas");
        p5.background("#1e1e1e");
    }

    p5.draw = () => {

    }

    const handleFileLoad = () => {
      console.log("Loading file")
    }

}

export default sketch;

