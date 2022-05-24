<template>
    <b-container class="mt-4">
        <b-row align-content="center" align-h="center" align-v="center">
            <h1 class="mt-4">Scene Trees</h1>
        </b-row>
        <b-row>
            <h2 class="mt-4">Introduction</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <p class="text-justify">A scene tree is a general data structure commonly used by vector-based graphics editing applications and modern computer games, which arranges the logical and often spatial representation of a graphical scene. It is a collection of nodes in a graph or tree structure. A tree node may have many children but only a single parent, with the effect of a parent applied to all its child nodes; an operation performed on a group automatically propagates its effect to all of its members. In many programs, associating a geometrical transformation matrix (see also transformation and matrix) at each group level and concatenating such matrices together is an efficient and natural way to process such operations. A common feature, for instance, is the ability to group related shapes and objects into a compound object that can then be manipulated as easily as a single object.</p>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>Structure of a Scene Tree</h3>
            <p class="text-justify">The structure and contents of a scene graph will obviously depend on the type of information it stores, or equivalently, the set of operations it is used for. Let us consider a simple tree structure that contains three types of nodes:</p>
            <ol>
                <li>The root node of the tree represents the whole collection of objects in a threedimensional scene. We call this node World or Virtual Universe. The root node is a special type of a group node.</li>
                <li>A group node is an internal node of the tree. It can contain any number of children, and represents a logical grouping of objects. A group node does not store geometrical data, but it can contain some semantic information such as transformations or visibility attributes applied to a group.</li>
                <li>Every leaf node represents either an object or a part of an object, and maintains the necessary geometrical information in addition to some semantic information. Camera and light sources may also be represented by leaf nodes.</li>
            </ol>
            <b-img thumbnail center src="http://what-when-how.com/wp-content/uploads/2012/07/tmpc2f998_thumb_thumb.png"></b-img>
        </b-row>
        <b-row>
            <h2 class="mt-4">Literature review</h2>
        </b-row>
        <b-row align-h="left" align-v="left">
            <h3>Transformation Hierarchy</h3>
            <p class="text-justify">A transformation applied to one part of an object often cascades with the transformations applied to the adjacent interconnected parts. For example, a change in the orientation of Part-2 of the model in Fig. 3.2a also affects Part-3. Such dependencies can be easily converted into hierarchical representations that are suitable for scene graphs. We consider below three examples involving hierarchical transformations: (i) the model of a mechanical part shown in Fig. 3.2, (ii) an articulated character model, and (iii) a small planetary system.</p>
            <b-img thumbnail center src="http://what-when-how.com/wp-content/uploads/2012/07/tmpc2f9101_thumb_thumb.png"></b-img>
        </b-row>
        <b-row align-h="left" align-v="left" class="mt-4">
            <h3>Scene trees in graphics editing tools</h3>
            <p class="text-justify">In vector-based graphics editing, each leaf node in a scene tree represents some atomic unit of the document, usually a shape such as an ellipse or Bezier path. Although shapes themselves (particularly paths) can be decomposed further into nodes such as spline nodes, it is practical to think of the scene graph as composed of shapes rather than going to a lower level of representation.
                Another useful and user-driven node concept is the layer. A layer acts like a transparent sheet upon which any number of shapes and shape groups can be placed. The document then becomes a set of layers, any of which can be conveniently made invisible, dimmed, or locked (made read-only). Some applications place all layers in a linear list, while others support layers within layers to any desired depth. 
                Internally, there may be no real structural difference between layers and groups at all, since they are both just nodes of a scene tree. If differences are needed, a common type declaration in C++ would be to make a generic node class, and then derive layers and groups as subclasses. A visibility member, for example, would be a feature of a layer, but not necessarily of a group.</p>
            <b-img thumbnail center src="https://paper.nweon.com/wp-content/uploads/2021/06/adb7ba255fbbfd80268c5b23d500f071.png"></b-img>
        </b-row>
        <b-row align-h="left" align-v="left" class="mt-4">
            <h3>Scene trees in games and 3D applications</h3>
            <p class="text-justify">Scene trees are useful for modern games using 3D graphics and increasingly large worlds or levels. In such applications, nodes in a scene graph (generally) represent entities or objects in the scene.
                For instance, a game might define a logical relationship between a knight and a horse so that the knight is considered an extension to the horse. The scene graph would have a 'horse' node with a 'knight' node attached to it.
                The scene graph may also describe the spatial, as well as the logical, relationship of the various entities: the knight moves through 3D space as the horse moves. In these large applications, memory requirements are major considerations when designing a scene graph. For this reason, many large scene graph systems use geometry instancing to reduce memory costs and increase speed. In our example above, each knight is a separate scene node, but the graphical representation of the knight (made up of a 3D mesh, textures, materials and shaders) is instanced. This means that only a single copy of the data is kept, which is then referenced by any 'knight' nodes in the scene graph. This allows a reduced memory budget and increased speed, since when a new knight node is created, the appearance data needs not be duplicated.
            </p>
            <b-img thumbnail center src="http://slackerparadise-assets.s3.amazonaws.com/media/images/papermap_610.jpg"></b-img>
        </b-row>
        <b-col class="mt-4">
            <h2>Methods</h2>
            <h3>Scene trees implementation</h3>
            <p class="text-justify">
                The simplest form of scene graph uses an array or linked list data structure, and displaying its shapes is simply a matter of linearly iterating the nodes one by one. Other common operations, such as checking to see which shape intersects the mouse pointer are also done via linear searches. For small scene graphs, this tends to suffice.
                The following implementation uses the library p5.treegl to interact with the scene tree built in a 3D space.
            </p>
        </b-col>
        <b-row>
            <h2>Code and Results</h2>
            <div>
                <code-highlight language="javascript">
                    <pre>
                        const width = 960;
                        const height = 540;

                        let color;
                        let points = [];
                        let pressure = 0;
                        let cameraListeners = false;

                        let camera;

                        /*var options = {
                            rollEnabled: false,
                            movementEnabled: true,
                            lookEnabled: true,
                            invertPitch: false,
                            fovEnabled: false,
                            fovMin: 2,
                            fovMax: 115,
                            rotationSensitivity: 0.05,
                            movementEasing: 3,
                            movementAcceleration: 700,
                            fovSensitivity: 0.01,
                            fovEasing: 3,
                            fovAcceleration: 5,
                            invertScroll: false
                        }*/

                        p5.setup = () => {
                            // Canvas definition
                            let canvas = p5.createCanvas(width, height, p5.WEBGL);
                            canvas.parent("vue-canvas");
                            p5.background("#1e1e1e");

                            // Camera definition
                            let state = {
                                distance: 250,
                                center: [0, 0, 0],
                                rotation: [0, 0, 0, 1],
                            };
                            camera = p5.createEasyCam();
                            camera.state_reset = state;
                            camera.setState(state, 2000);
                            camera.removeMouseListeners();
                            p5.perspective();

                            // Color picker definition
                            color = p5.createColorPicker('#FFFFFF');
                            color.parent("vue-canvas");

                            // Pressure event suscription
                            Pressure.set('#vue-canvas', {
                                change: function(force){
                                    pressure = force;
                                }
                            });
                        }

                        p5.draw = () => {
                            p5.update();
                            p5.background("#1e1e1e");
                            p5.push();
                            p5.strokeWeight(0.1);
                            p5.stroke("#FFFFFF");
                            p5.grid({ dotted: false });
                            p5.pop();
                            p5.axes();
                            for (const point of points) {
                                p5.push();
                                p5.translate(point.worldPosition);
                                sphereBrush(point);
                                p5.pop();
                            }
                        }


                        p5.update = () => {
                            //var controls = THREE(options);
                            //console.log(controls)
                            if((p5.keyIsPressed && p5.keyCode === p5.CONTROL)){
                            //if((p5.mouseIsPressed && p5.mouseButton === p5.CENTER)){    
                                if(!cameraListeners){
                                    camera.attachMouseListeners();
                                    cameraListeners = !cameraListeners;
                                }
                            }
                            if(!(p5.keyIsPressed && p5.keyCode === p5.CONTROL)){
                            //if(!(p5.mouseIsPressed && p5.mouseButton === p5.CENTER)){
                                if(cameraListeners){
                                    camera.removeMouseListeners();
                                    cameraListeners = !cameraListeners;
                                }
                            }
                            if(p5.mouseIsPressed && p5.mouseButton === p5.LEFT){
                                if(!cameraListeners){
                                    let dx = p5.abs(p5.mouseX - p5.pmouseX);
                                    let dy = p5.abs(p5.mouseY - p5.pmouseY);
                                    let speed = p5.constrain((dx + dy) / (2 * (width - height)), 0, 1);
                                    points.push({
                                        worldPosition: p5.treeLocation([p5.mouseX, p5.mouseY, pressure], { from: 'SCREEN', to: 'WORLD' }),
                                        color: color.color(),
                                        speed: speed
                                    }); 
                                } 
                            }
                        }

                        p5.keyPressed = () => {
                            if(p5.key == 'c'){
                                points = [];
                            }
                        }

                        let sphereBrush = (point) => {
                            p5.push();
                            p5.noStroke();
                            p5.fill(point.color);
                            p5.sphere(point.speed * 20 > 20 ? 20 : point.speed * 20);
                            p5.pop();
                        }
                    </pre>
                </code-highlight>
            </div>
        </b-row>
        <b-col>
            <h3>Wacom Tablet</h3>
            <SketchP5 :sketch="first_sketch" class="mt-4" :width="960" :heigth="640" :index="'-1'"/>
        </b-col>
        <b-col>
            <h3>Camera (mls.js handpose model)</h3>
            <SketchP5 :sketch="second_sketch" class="mt-4" :width="960" :heigth="640" :index="'-2'"/>
        </b-col>
        <b-row>
            <h2>Discussion</h2>
            <p class="text-justify">
                This work applies the concept of scene trees using different devices to interact with a 3D brush (wacom tablet and webcam). The input is transformed from screen space to world space using the library p5.treegl which performs several matrices operations to achieve this result. The main idea behind this work is the relation between a 2D space with a 3D space using a third input corresponding to the z-axis which allow us tranform points coordinates depending on whether them are going to be displayed. This principle is applied in different sectors that work on computer graphics, it is common to see scene trees implemented in such a way that they are both time and memory efficient.
            </p>
        </b-row>
        <b-row>
            <h2>Conclusion</h2>
            <ul>
                <li>Scene trees are a important data structure that allow tranform operations between different spaces using matrices operations.</li>
                <li>Scene trees are applied in several fields, especially in game development where characters interact in different worlds that have multiple objects contributing across different perspectives.</li>
                <li>Scene trees recreate the geometry of the real world by abstracting the actors to objects with perspective properties and attributes.</li>
            </ul>
        </b-row>
    </b-container>
</template>

<script>
    import scene_trees_wacom from '../sketches/SceneTrees.p5';
    import scene_trees_camera from '../sketches/SceneTreesCamera.p5'
    import SketchP5 from '../components/SketchP5.vue';

    import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
    import "vue-code-highlight/themes/duotone-sea.css";
    import "vue-code-highlight/themes/window.css";

    export default {
        name: "VisualIllusion",
        components: {
            SketchP5,
            CodeHighlight
        },
        data(){
            return {
                stroke: true,
                grid: true,
                antialiasing: true,
                first_sketch: scene_trees_wacom,
                second_sketch: scene_trees_camera
            }
        },
        created(){  
            
        }
    };
</script>

<style scoped>
    p, li {
        font-size: 1.25rem;
    }    
    h1 {
        font-size: 4rem;
    }
</style>