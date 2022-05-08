<template>
    <div id="vue-canvas"/>
</template>

<script>
    import p5 from 'p5';
    import treegl from '../../libs/p5.treegl';
    import easycam from '../../libs/p5.easycam';

    export default {
        props: {
            sketch: Function
        },
        mounted(){
            const p = easycam(treegl(p5));
            new p(this.sketch);
        }
    }
</script>

<style scoped>
#vue-canvas {
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 960px;
  height: 620px;
  overflow: hidden;
  border-color: var(--light);
}
</style>