<template>
  <nav class="navbar box-content h-32 w-32 p-6
  flex flex-direction: row max-height: 32px"
       v-bind:class="[isSticky ? stickyClass : '']">
    <div class="flex-star mr-16 width: 30px">
      <NavDropMenu class=""/>
    </div>
    <div class="justify-content: space-between align-self: stretch ml-100 width: 100%"/>
    <div class="flex-end width: 20px height: 100%">
      <a v-if="user">
        <router-link to="/">
          <div class="logoSmall">HOMELOGO</div>
        </router-link>
      </a>
    </div>
  </nav>
</template>

<script>
import NavDropMenu from '@/components/NavDropMenu.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'MenuBar',
  components: {
    NavDropMenu,
  },
  data() {
    return {
      isSticky: false,
      stickyClass: 'is_sticky',
      // scrollPosition: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 0.00000001) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  mounted() {
    this.handleScroll();
  },
};
</script>

<style>
a:hover {
  text-decoration-color: currentcolor;
  text-decoration: none;
}
a:visited {
  color: green;
}
.navbar.is_sticky {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  -webkit-animation: .95s ease-in-out 0s normal none 1 running fadeInDown;
  animation: .95s ease-in-out 0s normal none 1 running fadeInDown;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
}
</style>
