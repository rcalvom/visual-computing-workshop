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
  height: 620px;
  overflow: hidden;
  border-color: var(--light);
}
</style>