<template>
    <div id="vue-canvas" :style="`width=${width}px; height=${height}px`"/>
</template>

<script>
    import p5 from 'p5';
    import treegl from '../../libs/p5.treegl';
    import easycam from '../../libs/p5.easycam';
    import quadrille from '../../libs/p5.quadrille';

    export default {
        props: {
            sketch: Function,
            width: Number,
            height: Number
        },
        mounted(){
            const p = quadrille(easycam(treegl(p5)));
            new p(this.sketch);
        }
    }
</script>

<style>
#vue-canvas {
  display: block;
  margin: auto;
  padding: 0;
  overflow: hidden;
  border-color: var(--light);
}

.p5Canvas {
  margin: auto;
  display: block;
}
</style>