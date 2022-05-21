/**
 * Application of Scanimation visual illusion using p5.js
 * @param {p5} p5 reference 
 */

 const sketch = (p5) => {
    const WIDTH = 960;
    const HEIGTH = 640;

    let rows = 32; // max 64
    let cols = 48; // max 96
    
    let length = 10;

    let step = 4;
    let stroke = true;
    let antialiasing = true;
    let grid = true;

    let quadrille;
    let colsInput;
    let rowsInput;

    let vertex0X = 4;
    let vertex0Y = 21;
    let vertex1X = 23;
    let vertex1Y = 4;
    let vertex2X = 24;
    let vertex2Y = 29;
    
    p5.setup = () => {
        var canvas = p5.createCanvas(WIDTH, HEIGTH);
        canvas.parent("vue-canvas");

        p5.background('#060621');
        quadrille = p5.createQuadrille(cols, rows);

        colsInput = p5.select("#input-field-cols");
        colsInput.input(sizeInputEvent);

        rowsInput = p5.select("#input-field-rows");
        rowsInput.input(sizeInputEvent);

        p5.select("#input-field-stroke").changed(() => {
            stroke = !stroke;
            update();
        });

        p5.select("#input-field-antialiasing").changed(() => {
            antialiasing = !antialiasing;
            update();
        });

        p5.select("#input-field-grid").changed(() => {
            grid = !grid;
            update();
        });

        p5.select("#input-field-0x").input(vertexInputEvent);
        p5.select("#input-field-1x").input(vertexInputEvent);
        p5.select("#input-field-2x").input(vertexInputEvent);
        p5.select("#input-field-0y").input(vertexInputEvent);
        p5.select("#input-field-1y").input(vertexInputEvent);
        p5.select("#input-field-2y").input(vertexInputEvent);

        p5.select("#input-field-step").input((e) => {
            step = parseInt(e.target.value);
            update();
        });

        p5.stroke('white');
        p5.strokeWeight(1);
        p5.noFill();

        update();

        

    }

    const sizeInputEvent = (e) => {
        if(e.target.id == "input-field-cols"){
            cols = parseInt(e.target.value);
        }else if(e.target.id == "input-field-rows"){
            rows = parseInt(e.target.value);
        }
        update();
        
    }

    const vertexInputEvent = (e) => {
        if(e.target.id == "input-field-0x"){
            vertex0X = parseInt(e.target.value) - 1;
        }else if(e.target.id == "input-field-1x"){
            vertex1X = parseInt(e.target.value) - 1;
        }else if(e.target.id == "input-field-2x"){
            vertex2X = parseInt(e.target.value) - 1;
        }else if(e.target.id == "input-field-0y"){
            vertex0Y = parseInt(e.target.value) - 1;
        }else if(e.target.id == "input-field-1y"){
            vertex1Y = parseInt(e.target.value) - 1;
        }else if(e.target.id == "input-field-2y"){
            vertex2Y = parseInt(e.target.value) - 1;
        }
        
        update();
    }

    function update(){
        p5.background('#060621');
        quadrille = p5.createQuadrille(cols, rows);
        length = (WIDTH / cols * rows > HEIGTH) ? HEIGTH / rows : WIDTH / cols;
        for(var i = 0; i < rows; i++){
            for(var j = 0; j < cols; j++){
                quadrille._memory2D[i][j] = p5.color([0, 0, 255, 0]);
            }
        }
        var step_aux;
        if(antialiasing){
            step_aux = step;
        }else{
            step_aux = 2;
        }
        var borderx = 0;
        for(i = 0; i < rows; i+=1/step_aux){
            var bordery = 0;
            if(borderx++ % step_aux == 0){
                continue
            }
            for(j = 0; j < cols; j+=1/step_aux){
                if(bordery++ % step_aux == 0){
                    continue;
                }
                if(grid){
                    p5.point(j * length, i * length);
                }
                var coords = quadrille._barycentric_coords(i, j, vertex0Y, vertex0X, vertex1Y, vertex1X, vertex2Y, vertex2X);
                if (coords.w0 >= 0 && coords.w1 >= 0 && coords.w2 >= 0) {
                    quadrille._memory2D[Math.trunc(i)][Math.trunc(j)] = p5.color([0, 0, 255, p5.alpha(quadrille._memory2D[Math.trunc(i)][Math.trunc(j)]) + Math.trunc(256/Math.pow(step_aux - 1, 2))]);
                }
            }
        }
        if(grid){
            p5.drawQuadrille(quadrille, { cellLength: length, outline: 'grey', outlineWeight: 1, board: true});
        }else{
            p5.drawQuadrille(quadrille, { cellLength: length, outline: 'grey', outlineWeight: 0, board: true});
        }
        if(stroke){
            p5.triangle(vertex0X * length, vertex0Y * length, vertex1X * length, vertex1Y * length, vertex2X * length, vertex2Y * length);
        }
        
    }
  
  }
  
  export default sketch;
  
  