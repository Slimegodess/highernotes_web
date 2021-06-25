<template>
  <nav class="navbar" v-bind:class="[isSticky ? stickyClass : '']">
    <div>
      <li class="mr-6" v-if="user">
        <router-link to="/">
          <div class="logoSmall">HOMELOGO</div>
        </router-link>
      </li>
    </div>
  </nav>

  <div>
    <ul class="menu">
      <li class="mr-6" v-if="!user">
        <router-link to="/">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Login</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="!user">
        <router-link to="/signup">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Sign Up</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <div class="font-semibold text-black-500">Welcome {{ user.username }}</div>
      </li>
      <li class="mr-6" v-if="user">
        <router-link to="/works">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">Works</div>
        </router-link>
        <router-link to="/About">
          <div class="text-blue-500 hover:text-blue-800 cursor-pointer">About</div>
        </router-link>
        <router-link to="/Contact">
          <a class="text-blue-500 hover:text-blue-800 cursor-pointer">Contact</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <a class="text-blue-500 hover:text-blue-800 cursor-pointer" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MenuBar',
  components: {
  },
  data() {
    return {
      isSticky: false,
      stickyClass: 'is_sticky',
      scrollPosition: 0,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 100) {
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
};
</script>

<style>
.menu {
  display: table;
  position: absolute;
  top: 0;
  table-layout: fixed;
  border-spacing: 40px;
  list-style-type: none
}
a:hover {
  text-decoration-color: currentcolor;
  text-decoration: none;
}
a:visited {
  color: green;
}
.logoSmall {
  text-align: right;
}
</style>
