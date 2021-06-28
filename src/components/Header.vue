<template>
  <MenuBar/>
  <div class="ml-16 text-white text-align: left">
    <div>
      <a class="small_text_header text-2xl">{{small_text}}</a>
    </div>
    <div>
      <a class="big_text_above text-9xl line-through">{{big_text_above}}</a>
    </div>
    <div>
      <a class="big_text_below text-5xl line-through">{{big_text_below}}</a>
    </div>
  </div>
</template>

<script>
import MenuBar from './MenuBar.vue';

export default {
  name: 'Header',
  props: {
    big_text_above: String,
    big_text_below: String,
    small_text: String,
  },
  components: {
    MenuBar,
  },
};
</script>

<style>

</style>
