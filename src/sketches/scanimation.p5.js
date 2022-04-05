/**
 * Application of Scanimation visual illusion using p5.js
 * @param {p5} p5 reference 
 */

const sketch = (p5) => {
  let canvas;
  let input;
  let button;
  let clear;
  let check;
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

    clear = p5.createButton('Clear');
    clear.parent("vue-canvas");
    clear.mousePressed(handleClearButtonClick);

    check = p5.createCheckbox('Overlay', false);
    check.parent("vue-canvas");
    check.changed(handleChangeCheckbox);

    p5.background("#1e1e1e");
  }

  p5.draw = () => {
    if(check.checked()){
      x = (x + 2) % (2 * frames.length);
      drawGeneratedImage();
      p5.fill(p5.color(0));
      for (let i = - 2 * frames.length; i <= image.width; i+= 2 * frames.length) {
        p5.rect(i + x, 0, 2 * (frames.length - 1), image.height);
      }
    }
  }

  const handleFileLoad = (file) => {
    if (file.type === 'image') {
      frames.push(p5.loadImage(file.data));
    }
  }

  const handleGenerateButtonClick = () => {
    if(frames.length > 0){
      drawGeneratedImage();
    }
  }

  const handleClearButtonClick = () => {
    p5.background("#1e1e1e");
    frames = [];
  }

  const handleChangeCheckbox = () => {
    if(!check.checked()){
      drawGeneratedImage();  
    }
  }

  const drawGeneratedImage = () => {
    image = p5.createImage(960, 540);
    for (let i = 0; i < image.width; i += 2) {
      image.set(i, 0, frames[i / 2 % frames.length].get(i, 0, 2, image.height));
    }
    p5.image(image, 0, 0);
  }

}

export default sketch;

