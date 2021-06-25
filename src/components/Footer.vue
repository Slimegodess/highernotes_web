<template>
  <div class="footer">
    <div class="content_socialmedia">
      <div class="media">
        <a href="https://www.w3schools.com" target="_blank">Instagram</a>
      </div>
      <div class="media">
        <a href="https://www.w3schools.com" target="_blank">Youtube</a>
      </div>
      <div class="media">
        <a href="https://www.w3schools.com" target="_blank">LinkedIn</a>
      </div>
    </div>
    <div class="content_email">
      <a href="mailto: highhigherhai@gmail.com">highhigherhai@gmail.com</a>
    </div>
  </div>
  <!--
  <VueFixedHeader :threshold="0" headerClass="fixed-footer" fixedClass="isFixed">
    <el-menu class="footer-content" style="align-items: center;">
      <el-menu-item class=left href="https://www.w3schools.com" target="_blank">Instagram</el-menu-item> |
      <el-menu-item class=left href="https://www.w3schools.com" target="_blank">Youtube</el-menu-item> |
      <el-menu-item class=right href="mailto: highhigherhai@gmail.com">
        highhigherhai@gmail.com</el-menu-item>
    </el-menu>
  </VueFixedHeader>
  -->
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
