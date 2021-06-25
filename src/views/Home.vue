<template>
  <page-loader/>
  <div class="home">
    <div class="video-wrapper">
      <video-background
        :src= "require('@/assets/videos/bg_video.mp4')"
        :poster="require('@/assets/images/preloader_poster.jpg')"
        style="max-height: 100%; height: 100vh"
      >
        <MenuBar class="menu-container"/>
        <div class="center">
          <div class="logoBig">HIGHER NOTES LOGO!</div>
          <h1>...</h1>
          <Login class="login" :v-if="!user"/>
        </div>
        <Footer/>
      </video-background>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import MenuBar from '@/components/MenuBar.vue';
import Login from '@/components/Login.vue';
import { mapGetters } from 'vuex';
import PageLoader from '@/components/PageLoader.vue';

export default {
  name: 'Home',
  components: {
    PageLoader,
    Footer,
    Login,
    MenuBar,
  },
  Props: {
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
};
</script>

<style>
div.home {
  width:      100%;
  height:     100%;
  z-index:    5;
  top:        0;
  left:       0;
  position:   fixed;
}
MenuBar.menu-container {
  width:      100%;
  height:     100%;
  z-index:    5;
  top:        0;
  left:       0;
  position:   fixed;
}
div.center {
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
