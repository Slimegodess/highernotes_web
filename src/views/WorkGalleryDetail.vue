<template>
  <MenuBar class="menu-container"/>
  <div class="text-2xl mt-4">Gallery</div>
  <!-- <div class="flex flex-wrap p-10 justify-center m-auto w-full" v-if="photo"> -->
  <div class="flex w-full mt-10 items-center justify-center bg-grey-lighter">
    <form enctype="multipart/form-data" novalidate>
      <label
        class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue
          rounded-lg shadow-lg tracking-wide uppercase border border-blue
          cursor-pointer hover:bg-blue hover:text-green-600"
      >
        <svg
          class="w-8 h-8"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3
              3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11
              11h3l-4-4-4 4h3v3h2v-3z"
          />
        </svg>
        <span class="mt-2 text-base leading-normal">Select a file</span>
        <input @change="onFileChange" accept="image/*" type="file" class="hidden" />
      </label>
    </form>
  </div>
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
