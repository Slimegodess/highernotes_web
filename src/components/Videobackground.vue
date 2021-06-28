<template>
  <div class="video-wrapper">
    <video-background
      :src= "require('@/assets/videos/bg_video.mp4')"
      :poster="require('@/assets/images/black-noise_med.png')"
      style="max-height: 100%; height: 100vh"
    >
    </video-background>
  </div>
</template>

<script>
export default {
  name: 'videobackground',
};
</script>

<style scoped>
.video-wrapper {
  z-index: -2;
}
</style>
