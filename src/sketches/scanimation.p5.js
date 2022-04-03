/**
 * Application of Scanimation visual illusion using p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
    let canvas;
    let input;
    let button;
    let image;
    let frames = [];
  
    p5.setup = () => {
        canvas = p5.createCanvas(960, 540);
        canvas.parent("vue-canvas");

        input = p5.createFileInput(handleFileLoad, true);
        input.parent("vue-canvas");

        button = p5.createButton('Generate');
        button.parent("vue-canvas");
        button.mousePressed(handleGenerateButtonClick);

        p5.background("#1e1e1e");
    }

    p5.draw = () => {

    }

    const handleFileLoad = (file) => {
      if(file.type === 'image'){
        frames.push(p5.loadImage(file.data));
      }
    }

    const handleGenerateButtonClick = () => {
      image = p5.createImage(960, 540);
      for(let i = 0; i < image.width; i+=2){
        //for(let j = 0; j < image.height; j++){
          image.set(i, 0, frames[i / 2 % frames.length].get(i, 0, 2, image.height));
        //}
        console.log("i");
      }
      p5.image(image, 0, 0);
    }

}

export default sketch;

