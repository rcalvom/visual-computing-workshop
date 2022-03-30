<template>
  <div>
    <div class="d-flex align-items-center mb-3">
      <b-progress class="w-100" :max="maxLoadingTime" height="1.5rem">
        <b-progress-bar
          :value="loadingTime"
          :label="`${((loadingTime / maxLoadingTime) * 100).toFixed(2)}%`"
        ></b-progress-bar>
      </b-progress>

      <b-button class="ml-3" @click="startLoading()">Reload</b-button>
    </div>

    <b-skeleton-wrapper :loading="loading">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>

      <b-card> Ola UwU </b-card>
    </b-skeleton-wrapper>
    <div id="vue-canvas"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      loadingTime: 0,
      maxLoadingTime: 3,
    };
  },
  watch: {
    loading(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.clearLoadingTimeInterval();

        if (newValue) {
          this.$_loadingTimeInterval = setInterval(() => {
            this.loadingTime++;
          }, 1000);
        }
      }
    },
    loadingTime(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue === this.maxLoadingTime) {
          this.loading = false;
        }
      }
    },
  },
  created() {
    this.$_loadingTimeInterval = null;
  },
  mounted() {
    this.startLoading();
    const script = function (p5) {
      var speed = 2;
      var posX = 35;

      // NOTE: Set up is here
      p5.setup = () => {
        const canvas = p5.createCanvas(500, 500);
        canvas.parent("vue-canvas");
      };
      // NOTE: Draw is here
      p5.draw = () => {
        p5.background(245);
        const degree = p5.frameCount * 3;
        const y = p5.sin(p5.radians(degree)) * 50;

        p5.push();
        p5.translate(0, p5.height / 2);
        p5.fill(66, 184, 131);
        p5.stroke(53, 73, 94);
        p5.strokeWeight(5);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();
        posX += speed;

        if (posX > p5.width - 35 || posX < 35) {
          speed *= -1;
        }
      };
    };
    // NOTE: Use p5 as an instance mode
    const P5 = require("p5");
    new P5(script);
  },
  methods: {
    clearLoadingTimeInterval() {
      clearInterval(this.$_loadingTimeInterval);
      this.$_loadingTimeInterval = null;
    },
    startLoading() {
      this.loading = true;
      this.loadingTime = 0;
    },
  },
};
</script>

<style scoped>
#vue-canvas {
  display: block;
  margin: 0 auto;
  padding: 0;
  width: 500px;
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
}
</style>
