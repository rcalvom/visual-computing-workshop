"use strict";(self["webpackChunkvisual_computing_workshop"]=self["webpackChunkvisual_computing_workshop"]||[]).push([[860],{9846:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{staticClass:"mt-4"},[n("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[n("h1",{staticClass:"mt-4"},[t._v("Anti-aliasing")])]),n("b-row",[n("h2",{staticClass:"mt-4"},[t._v("Introduction")])]),n("b-row",{attrs:{"align-h":"start","align-v":"start"}},[n("p",{staticClass:"text-justify"},[t._v(" Aliasing in digital signal processing is the overlapping that occurs when processing high resolution signals on low resolution media. This phenomenon has been worked on mainly in the theory of computation and its application is mostly in graphics processing. Antialising consists of all techniques related to avoid or reduce the impact generated by this phenomenon. ")])]),n("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[n("b-col",[n("b-img",{staticClass:"mt-4",attrs:{thumbnail:"",src:"https://www.dataforth.com/g/aliasing-examples.png"}})],1),n("b-col",[n("b-img",{staticClass:"mt-4",attrs:{thumbnail:"",src:"https://diit.cz/sites/default/files/styles/large/public/anti_aliasing.png?itok=2ecsdnbt&c=80f32de47ece52d2f4d91285b63428df"}})],1)],1),n("b-row",[n("h2",{staticClass:"mt-4"},[t._v("Literature review")])]),n("b-row",[n("p",[t._v(" In general, this concept was born in the theory of computation where there was a loss of information when one wanted to analyze an analog signal using digital signals. ")])]),n("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[n("b-col",[n("b-img",{staticClass:"mt-4 text-center",attrs:{center:"",thumbnail:"",src:"https://people.finearts.uvic.ca/~aschloss/course_mat/MU207/207equations/aliasing.jpg"}})],1)],1),n("b-row",{staticClass:"mt-4"},[n("p",[t._v(" There are applications of anti-aliasing using algorithms on the figures but also using artificial intelligences to predict the points that would help to improve the sampling of the signals. ")])]),n("b-row",[n("p",[t._v(' In the article "Evaluating Different Spatial Anti Aliasing Techniques" by Victor Kesten, different methods for the implementation of anti-alising are shown, but it is mentioned that the MSAAx4 and FXAA methods are the most optimal for anti-aliasing in 3D contexts on computers with not very good computational capabilities. ')])]),n("b-row",{attrs:{"align-content":"center","align-h":"center","align-v":"center"}},[n("b-col",[n("b-img",{staticClass:"mt-4 text-center",attrs:{center:"",thumbnail:"",src:"https://www.softzone.es/app/uploads-softzone.es/2021/05/MSAA-Antialiasing.png"}})],1)],1),n("b-row",{staticClass:"mt-4"},[n("p",[t._v(" This filter is quite useful in practice as it allows to scale it in iterations in order to adjust it to the performance of the system. ")])]),n("b-row",[n("h2",[t._v("Methods")])]),n("b-row",[n("p",[t._v(" We are going to present an implementation of anti-aliasing using sampling and barycentric coordinates to draw a triangle, here the step by step is as follows ")]),n("p",[n("ul",[n("li",[t._v(" Define the "),n("vue-mathjax",{attrs:{formula:"$(A_x, A_y), (B_x, B_y), (C_x, C_y)$"}}),t._v(" coordinates of each of the vertices of the triangle to be drawn. The unit of measurement is pixels ")],1),n("li",[t._v(" Now, we calculate the barycentric coordinates of several points inside the pixels, preferably the amount of these samples will be a number squared. "),n("b-img",{staticClass:"mt-4 text-center",attrs:{center:"",thumbnail:"",src:"https://learnopengl.com/img/advanced/anti_aliasing_rasterization_samples.png"}})],1),n("li",{staticClass:"mt-4"},[t._v(" With the help of the barycentric coordinates, the number of samples of each pixel within the triangle to be drawn is counted. Depending on this value an alpha value will be defined for the corresponding color. "),n("b-img",{staticClass:"my-4 text-center",attrs:{center:"",thumbnail:"",src:"https://learnopengl.com/img/advanced/anti_aliasing_rasterization_samples_filled.png"}}),n("vue-mathjax",{staticClass:"mt-4",attrs:{formula:"$$\\alpha = 256 \\times \\dfrac{\\# \\text{of samples in the pixel and in the triangle}}{\\# \\text{of total samples in a pixel}}$$"}})],1)])])]),n("b-row",[n("h2",[t._v("Code and Results")])]),n("b-row",[n("b-col",{staticClass:"mb-4",attrs:{cols:"12"}},[n("SketchP5",{staticClass:"mt-4",attrs:{sketch:t.sketch,width:960,heigth:640}})],1),n("b-col",{attrs:{cols:"2",offset:"2"}},[n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-0x"}},[t._v("Punto 1 X")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-0x",type:"number",min:"1",max:"96",value:"5"}})],1),n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-1x"}},[t._v("Punto 2 X")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-1x",type:"number",min:"1",max:"96",value:"25"}})],1),n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-2x"}},[t._v("Punto 3 X")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-2x",type:"number",min:"1",max:"96",value:"25"}})],1)],1),n("b-col",{attrs:{cols:"2"}},[n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-0y"}},[t._v("Punto 1 Y")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-0y",type:"number",min:"1",max:"64",value:"22"}})],1),n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-1y"}},[t._v("Punto 2 Y")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-1y",type:"number",min:"1",max:"64",value:"5"}})],1),n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-2y"}},[t._v("Punto 3 Y")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-2y",type:"number",min:"1",max:"64",value:"30"}})],1)],1),n("b-col",{attrs:{cols:"2"}},[n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-cols"}},[t._v("Columnas")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-cols",type:"number",min:"1",max:"96",value:"48"}})],1),n("b-row",{staticClass:"m-2"},[n("b-form-checkbox",{attrs:{"button-variant":"primary",id:"input-field-antialiasing",switch:""},model:{value:t.antialiasing,callback:function(e){t.antialiasing=e},expression:"antialiasing"}},[t._v(" Anti-aliasing ")])],1),n("b-row",{staticClass:"m-2"},[n("b-form-checkbox",{attrs:{"button-variant":"primary",id:"input-field-grid",switch:""},model:{value:t.grid,callback:function(e){t.grid=e},expression:"grid"}},[t._v(" Grid ")])],1)],1),n("b-col",{attrs:{cols:"2"}},[n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-rows"}},[t._v("Filas")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-rows",type:"number",min:"1",max:"64",value:"32"}})],1),n("b-row",{staticClass:"m-2"},[n("b-form-checkbox",{attrs:{"button-variant":"primary",id:"input-field-stroke",switch:""},model:{value:t.stroke,callback:function(e){t.stroke=e},expression:"stroke"}},[t._v(" Stroke ")])],1),n("b-row",{staticClass:"m-2"},[n("label",{attrs:{for:"input-field-step"}},[t._v("Step")]),n("b-form-input",{attrs:{size:"sm",id:"input-field-step",type:"number",min:"1",max:"5",value:"3"}})],1)],1)],1),n("div",{staticClass:"mt-4"},[n("code-highlight",{attrs:{language:"javascript"}},[n("pre",[t._v('                /**\n                * Application of Scanimation visual illusion using p5.js\n                * @param {p5} p5 reference \n                */\n\n                const sketch = (p5) => {\n                    const WIDTH = 960;\n                    const HEIGTH = 640;\n\n                    let rows = 32; // max 64\n                    let cols = 48; // max 96\n                    \n                    let length = 10;\n\n                    let step = 4;\n                    let stroke = true;\n                    let antialiasing = true;\n                    let grid = true;\n\n                    let quadrille;\n                    let colsInput;\n                    let rowsInput;\n\n                    let vertex0X = 4;\n                    let vertex0Y = 21;\n                    let vertex1X = 23;\n                    let vertex1Y = 4;\n                    let vertex2X = 24;\n                    let vertex2Y = 29;\n                    \n                    p5.setup = () => {\n                        var canvas = p5.createCanvas(WIDTH, HEIGTH);\n                        canvas.parent("vue-canvas");\n\n                        p5.background(\'#060621\');\n                        quadrille = p5.createQuadrille(cols, rows);\n\n                        colsInput = p5.select("#input-field-cols");\n                        colsInput.input(sizeInputEvent);\n\n                        rowsInput = p5.select("#input-field-rows");\n                        rowsInput.input(sizeInputEvent);\n\n                        p5.select("#input-field-stroke").changed(() => {\n                            stroke = !stroke;\n                            update();\n                        });\n\n                        p5.select("#input-field-antialiasing").changed(() => {\n                            antialiasing = !antialiasing;\n                            update();\n                        });\n\n                        p5.select("#input-field-grid").changed(() => {\n                            grid = !grid;\n                            update();\n                        });\n\n                        p5.select("#input-field-0x").input(vertexInputEvent);\n                        p5.select("#input-field-1x").input(vertexInputEvent);\n                        p5.select("#input-field-2x").input(vertexInputEvent);\n                        p5.select("#input-field-0y").input(vertexInputEvent);\n                        p5.select("#input-field-1y").input(vertexInputEvent);\n                        p5.select("#input-field-2y").input(vertexInputEvent);\n\n                        p5.select("#input-field-step").input((e) => {\n                            step = parseInt(e.target.value);\n                            update();\n                        });\n\n                        p5.stroke(\'white\');\n                        p5.strokeWeight(1);\n                        p5.noFill();\n\n                        update();\n\n                        \n\n                    }\n\n                    const sizeInputEvent = (e) => {\n                        if(e.target.id == "input-field-cols"){\n                            cols = parseInt(e.target.value);\n                        }else if(e.target.id == "input-field-rows"){\n                            rows = parseInt(e.target.value);\n                        }\n                        update();\n                        \n                    }\n\n                    const vertexInputEvent = (e) => {\n                        if(e.target.id == "input-field-0x"){\n                            vertex0X = parseInt(e.target.value) - 1;\n                        }else if(e.target.id == "input-field-1x"){\n                            vertex1X = parseInt(e.target.value) - 1;\n                        }else if(e.target.id == "input-field-2x"){\n                            vertex2X = parseInt(e.target.value) - 1;\n                        }else if(e.target.id == "input-field-0y"){\n                            vertex0Y = parseInt(e.target.value) - 1;\n                        }else if(e.target.id == "input-field-1y"){\n                            vertex1Y = parseInt(e.target.value) - 1;\n                        }else if(e.target.id == "input-field-2y"){\n                            vertex2Y = parseInt(e.target.value) - 1;\n                        }\n                        \n                        update();\n                    }\n\n                    function update(){\n                        p5.background(\'#060621\');\n                        quadrille = p5.createQuadrille(cols, rows);\n                        length = (WIDTH / cols * rows > HEIGTH) ? HEIGTH / rows : WIDTH / cols;\n                        for(var i = 0; i < rows; i++){\n                            for(var j = 0; j < cols; j++){\n                                quadrille._memory2D[i][j] = p5.color([0, 0, 255, 0]);\n                            }\n                        }\n                        var step_aux;\n                        if(antialiasing){\n                            step_aux = step;\n                        }else{\n                            step_aux = 2;\n                        }\n                        var borderx = 0;\n                        for(i = 0; i < rows; i+=1/step_aux){\n                            var bordery = 0;\n                            if(borderx++ % step_aux == 0){\n                                continue\n                            }\n                            for(j = 0; j < cols; j+=1/step_aux){\n                                if(bordery++ % step_aux == 0){\n                                    continue;\n                                }\n                                if(grid){\n                                    p5.point(j * length, i * length);\n                                }\n                                var coords = quadrille._barycentric_coords(i, j, vertex0Y, vertex0X, vertex1Y, vertex1X, vertex2Y, vertex2X);\n                                if (coords.w0 >= 0 && coords.w1 >= 0 && coords.w2 >= 0) {\n                                    quadrille._memory2D[Math.trunc(i)][Math.trunc(j)] = p5.color([0, 0, 255, p5.alpha(quadrille._memory2D[Math.trunc(i)][Math.trunc(j)]) + Math.trunc(256/Math.pow(step_aux - 1, 2))]);\n                                }\n                            }\n                        }\n                        if(grid){\n                            p5.drawQuadrille(quadrille, { cellLength: length, outline: \'grey\', outlineWeight: 1, board: true});\n                        }else{\n                            p5.drawQuadrille(quadrille, { cellLength: length, outline: \'grey\', outlineWeight: 0, board: true});\n                        }\n                        if(stroke){\n                            p5.triangle(vertex0X * length, vertex0Y * length, vertex1X * length, vertex1Y * length, vertex2X * length, vertex2Y * length);\n                        }\n                        \n                    }\n                \n                }\n                \n                export default sketch;\n\n\n            ')])])],1),n("b-row",[n("h2",[t._v("Discussion")])]),n("b-row",[n("p",[t._v(" For discussion of this article I propose two points "),n("ul",[n("li",[t._v(" Are we actually reducing information loss? Or are we actually adding false information that appears to be the real thing? ")]),n("li",[t._v(" This implementation using centrobar coordinates is very efficient when we want to draw n-simplexes (triangles, tetrahedra, etc) but how could we do it to draw figures that are not triangles? ")])])])]),n("b-row",[n("h2",[t._v("Conclusion")]),n("p",[n("ul",[n("li",[t._v(" The barycentric coordinates are very useful in this method of anti.aliasing, where we smooth the loss of information in triangles. ")]),n("li",[t._v(" Anti-aliasing will not be very useful when we want to represent figures in high resolution media since the loss of information will be very low. ")]),n("li",[t._v(" The use of this technique in some cases will greatly improve the user experience. ")]),n("li",[t._v(" Anti-aliasing is a process that should be used with care as it is adding load to the graphics processing. ")])])])]),n("b-row")],1)},a=[];const s=t=>{const e=960,n=640;let i,a,s,r=32,l=48,o=10,u=4,p=!0,c=!0,d=!0,g=4,h=21,f=23,m=4,v=24,b=29;t.setup=()=>{var o=t.createCanvas(e,n);o.parent("vue-canvas"),t.background("#060621"),i=t.createQuadrille(l,r),a=t.select("#input-field-cols"),a.input(w),s=t.select("#input-field-rows"),s.input(w),t.select("#input-field-stroke").changed((()=>{p=!p,_()})),t.select("#input-field-antialiasing").changed((()=>{c=!c,_()})),t.select("#input-field-grid").changed((()=>{d=!d,_()})),t.select("#input-field-0x").input(x),t.select("#input-field-1x").input(x),t.select("#input-field-2x").input(x),t.select("#input-field-0y").input(x),t.select("#input-field-1y").input(x),t.select("#input-field-2y").input(x),t.select("#input-field-step").input((t=>{u=parseInt(t.target.value),_()})),t.stroke("white"),t.strokeWeight(1),t.noFill(),_()};const w=t=>{"input-field-cols"==t.target.id?l=parseInt(t.target.value):"input-field-rows"==t.target.id&&(r=parseInt(t.target.value)),_()},x=t=>{"input-field-0x"==t.target.id?g=parseInt(t.target.value)-1:"input-field-1x"==t.target.id?f=parseInt(t.target.value)-1:"input-field-2x"==t.target.id?v=parseInt(t.target.value)-1:"input-field-0y"==t.target.id?h=parseInt(t.target.value)-1:"input-field-1y"==t.target.id?m=parseInt(t.target.value)-1:"input-field-2y"==t.target.id&&(b=parseInt(t.target.value)-1),_()};function _(){t.background("#060621"),i=t.createQuadrille(l,r),o=e/l*r>n?n/r:e/l;for(var a=0;a<r;a++)for(var s=0;s<l;s++)i._memory2D[a][s]=t.color([0,0,255,0]);var w;w=c?u:2;var x=0;for(a=0;a<r;a+=1/w){var _=0;if(x++%w!=0)for(s=0;s<l;s+=1/w)if(_++%w!=0){d&&t.point(s*o,a*o);var y=i._barycentric_coords(a,s,h,g,m,f,b,v);y.w0>=0&&y.w1>=0&&y.w2>=0&&(i._memory2D[Math.trunc(a)][Math.trunc(s)]=t.color([0,0,255,t.alpha(i._memory2D[Math.trunc(a)][Math.trunc(s)])+Math.trunc(256/Math.pow(w-1,2))]))}}d?t.drawQuadrille(i,{cellLength:o,outline:"grey",outlineWeight:1,board:!0}):t.drawQuadrille(i,{cellLength:o,outline:"grey",outlineWeight:0,board:!0}),p&&t.triangle(g*o,h*o,f*o,m*o,v*o,b*o)}};var r=s,l=n(2270),o=n(4148),u=n(2977),p={name:"VisualIllusion",components:{SketchP5:l.Z,CodeHighlight:o.Z,"vue-mathjax":u.VueMathjax},data(){return{stroke:!0,grid:!0,antialiasing:!0,sketch:r}},created(){}},c=p,d=n(1001),g=(0,d.Z)(c,i,a,!1,null,"660d2393",null),h=g.exports}}]);
//# sourceMappingURL=860.55480953.js.map