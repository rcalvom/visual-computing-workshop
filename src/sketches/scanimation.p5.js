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
    let x = 0;
  
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
      p5.background(255);
      p5.image(image, 0, 0);
      let c = p5.color(100);
      p5.fill(c);
      for (let i = 800; i >= 0; i -= 12) {
        p5.rect(i - x, 0, 9.3, 800);
      }
      if (x === 8) {
        x = 0;
      } else {
        x += 0.2;
      }
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

