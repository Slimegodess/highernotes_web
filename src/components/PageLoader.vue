<template>
  <div class="fadeMe" v-if="!isloaded">
      <h1>PAGELOADER</h1>
  </div>

</template>

<script>
// import loading from 'vue-full-loading';

export default {
  data: () => ({
    isloaded: true,
  }),
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.isloaded = true;
      }
    };
  },
};
</script>

<style >
.pageloader {
  position: fixed;
  top: 50vh;
  left: 50vh;
  width: 100%;
  heigth: 100%;
  background-color: green;
  z-index: 10
}
div.fadeMe {
  opacity:    0.5;
  background: #000;
  width:      100%;
  height:     100%;
  z-index:    10;
  top:        0;
  left:       0;
  position:   fixed;
}

</style>
