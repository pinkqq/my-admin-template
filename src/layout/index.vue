<template>
  <div class="app-wrapper">
    <div class="fixed-header">
      <navbar />
    </div>
    <app-main />
  </div>
</template>
<script>
import { Navbar, AppMain } from "./components";
export default {
  name: "Layout",
  components: { Navbar, AppMain }
};
</script>
<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: 100%;
  transition: width 0.28s;
}
</style>
