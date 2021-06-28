<template>
  <div class="fixed top-0 left-0 w-full h-full">
    <div>
      <page-loader/>
    </div>
    <div>
      <Videobackground/>
    </div>
    <MenuBar class="fixed left-0 top-0 w-full"/>
    <div class="center">
      <a class="flex font-bold text-white text-2xl line-through" :v-if="user">
        <h1>HIGHER</h1>
        <h1>NOTES</h1>
      </a>
      <a class="font-semibold text-white text-2xl line-through mt-16"
         :v-if="user">Welcome {{user.username}}</a>
      <div class="mt-4">
        <Login :v-if="user == null"/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import MenuBar from '@/components/MenuBar.vue';
import Login from '@/components/Login.vue';
import { mapGetters } from 'vuex';
import PageLoader from '@/components/PageLoader.vue';
import Videobackground from '@/components/Videobackground.vue';

export default {
  name: 'Home',
  components: {
    Videobackground,
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

<style scoped>
div.center {
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
