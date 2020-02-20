<template>
  <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: "AppMain"
};
</script>
<style lang="scss" scoped>
@import "@/styles/element-variables.scss";

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - #{$navbarHeight});
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header + .app-main {
  padding-top: $navbarHeight;
}
</style>
