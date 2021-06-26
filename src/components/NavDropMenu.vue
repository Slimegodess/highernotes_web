<template>
  <div>
    <ul class="justify-content: center">
      <li class="mr-6" v-if="!user">
        <router-link to="/">
          <a class="text-green-500 hover:text-blue-800 cursor-pointer">Login</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="!user">
        <router-link to="/signup">
          <a class="text-green-500 hover:text-blue-800 cursor-pointer">Sign Up</a>
        </router-link>
      </li>
      <li>
        <router-link to="/works">
          <a class="text-green-500 hover:text-blue-800 cursor-pointer">Works</a>
        </router-link>
      </li>
      <li>
        <router-link to="/About">
          <a class="text-green-500 hover:text-blue-800 cursor-pointer">About</a>
        </router-link>
      </li>
      <li>
        <router-link to="/Contact">
          <a class="text-green-500 hover:text-blue-800 cursor-pointer">Contact</a>
        </router-link>
      </li>
      <li class="mr-6" v-if="user">
        <a class="text-green-500 hover:text-blue-800 cursor-pointer" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavDropMenu',
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>

</style>
