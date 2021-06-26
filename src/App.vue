<template>
  <div class="bg-hero py-40 bg-cover bg-no-repeat bg-center flex justify-center"/>
  <div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  mounted() {
    this.authAction();
  },
  components: {
  },
  methods: {
    ...mapActions('auth', ['authAction']),
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.bg-hero {
  background-image: url("~@/assets/images/black-noise_soft.png");
  position: fixed;
  top: 0;
  left: 0;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
</style>
