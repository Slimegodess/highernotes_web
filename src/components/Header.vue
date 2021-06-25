<template>
  <MenuBar/>
  <h3>
    <div>
      <span class="small_text_header">{{small_text}}</span>
    </div>
    <div>
      <span class="big_text_above">{{big_text_above}}</span>
    </div>
    <div>
      <span class="big_text_below">{{big_text_below}}</span>
    </div>
  </h3>
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
