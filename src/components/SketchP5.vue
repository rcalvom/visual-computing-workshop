<template>
    <div id="vue-canvas"/>
</template>

<script>
    import P5 from 'p5';

    export default {
        props: {
            sketch: Function
        },
        mounted(){
            new P5(this.sketch);
        }
    }
</script>

<style scoped>
#vue-canvas {
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 960px;
  height: 580px;
  /*border-radius: 10px;*/
  overflow: hidden;
  /*border-width: 1px;
  border-style: solid;*/
  border-color: var(--light);
}
</style>