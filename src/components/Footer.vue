<template>
  <div class="footer text-green-600 hover:text-green">
    <div class="content_socialmedia">
      <div class="media">
        <a href="https://www.instagram.com/" target="_blank">Instagram</a>
      </div>
      <div class="media">
        <a href="https://www.youtube.com/" target="_blank">Youtube</a>
      </div>
      <div class="media">
        <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
      </div>
    </div>
    <div class="content_email">
      <a href="mailto: highhigherhai@gmail.com">highhigherhai@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  display: table;
  position: absolute;
  bottom: 0;
  table-layout: fixed;
  border-spacing: 40px
}
.content_socialmedia {
  display: table;
  bottom: 0;
  border-spacing: 10px
}
.media {
  display: table-cell;
  bottom: 0;
  left: 0;
}
.content_email {
  display: table-cell;
  bottom: 0;
  left: 0;
}
</style>
