<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: 'background',
  methods: {
    generateNoise() {
      this.noise = document.createElement('canvas');
      this.noise.height = window.innerHeight * 2;
      this.noise.width = window.innerWidth * 2;
      const noiseContext = this.noise.getContext('2d');
      const noiseData = noiseContext.createImageData(
        this.noise.width,
        this.noise.height,
      );
      const buffer32 = new Uint32Array(noiseData.data.buffer);
      let len = buffer32.length - 1;
      // eslint-disable-next-line no-plusplus
      while (len--) {
        // eslint-disable-next-line no-bitwise
        buffer32[len] = Math.random() < 0.5 ? 0 : -1 >> 0;
      }
      noiseContext.putImageData(noiseData, 0, 0);
    },
    moveNoise() {
      const { canvas } = this.$refs;
      const context = canvas.getContext('2d');
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(this.noise, -x, -y);
      requestAnimationFrame(this.moveNoise);
    },
  },
  mounted() {
    this.$refs.canvas.height = window.innerHeight;
    this.$refs.canvas.width = window.innerWidth;
    this.generateNoise();
    requestAnimationFrame(this.moveNoise);
  },
};
</script>

<style scoped>
canvas{
  height: 100%;
  left: 0;
  mix-blend-mode: soft-light;
  opacity: 0.25;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100000;
}
</style>
