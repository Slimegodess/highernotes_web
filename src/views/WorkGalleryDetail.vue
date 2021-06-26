<template>
  <MenuBar class="menu-container"/>
      <div>
        <amplify-s3-image
          level="protected"
          :img-key="photo.thumbnail ? photo.thumbnail.key : photo.fullsize.key"
          class="w-4/12"
        ></amplify-s3-image>
      </div>
      <div v-if="photo.createdAt && photo.gps">
        <ul>
          <li>Created At {{ photo.createdAt }}</li>
          <li>
            latitude
            {{ photo.gps.latitude }}
          </li>
          <li>longitude At {{ photo.gps.longitude }}</li>
        </ul>
      </div>
  <!--
  <div class="video-js">
    <video id="my_video_1" class="video-js vjs-default-skin" width="100%" height="100%"
           controls preload="none" poster='http://video-js.zencoder.com/oceans-clip.jpg'
           data-setup='{ "aspectRatio":"640:267", "playbackRates": [1, 1.5, 2] }'>
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' />
      <source src="https://vjs.zencdn.net/v/oceans.webm" type='video/webm' />
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
        >
      </p>
    </video>
  </div>
  -->
</template>

<script>
import MenuBar from '@/components/MenuBar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'WorkGalleryDetail',
  components: { MenuBar },
  // emits: ['passPhoto'],
  data: () => ({
    photo: '',
  }),
  async onFileChange(file) {
    if (!file.target || !file.target.files[0]) {
      return;
    }
    try {
      await this.$store.dispatch('albumInfo/createPhoto', {
        file: file.target.files[0],
        id: this.id,
      });
      this.getPhotos();
    } catch (error) {
      console.log('error create photo ', error);
    }
  },
  computed: {
    ...mapGetters({
      photo: 'albumInfo/photo',
    }),
  },
};
</script>

<style scoped>
.menu-container {
  z-index: 500;
  position: fixed;
}
.video-js vjs-default-skin {
  z-index: 2147483647;
  top: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
html, body {
  min-height: 100%;
}
body { background-color: dodgerblue; }
</style>
