<template>
  <transition>
    <div class="preloader">
      <div class="logo"></div>
      //do something
      //if loaded play video
    </div>
    <p> LOADING SCREEN</p>
  </transition>
</template>

<script>
export default {

};
</script>

<style >
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  position: absolute
  width: 100%
  heigth: 100%
  background-color: black
  z-index: 9999
</style>
