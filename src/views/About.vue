<template>
  <div>
    <Header class="justify-content: top width: 100%"
            :small_text="'you dare'" :big_text_above="'HIGHER'" :big_text_below="'ABOUT US'" />
    <div class="flex text-white text-base mt-8 m-12">
      <p class="m-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        , sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.</p>
      <p class="m-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        , sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.</p>
      <p class="m-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        , sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua.</p>
    </div>
    <Footer/>
  </div>
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
