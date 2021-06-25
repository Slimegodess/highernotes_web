<template>
  <Header :small_text="'you dare'" :big_text_above="'HIGHER'" :big_text_below="'ABOUT PAGE'" />
  <div class="content_information">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
      , sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
      , sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit
      , sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua.</p>
  </div>
  <Footer/>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'About',
  components: {
    Header,
    Footer,
  },
};

</script>

<style scoped>

</style>
