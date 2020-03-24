<template>
  <div class="app-wrapper" :class="{ hideSidebar: isHideSidebar }">
    <Sidebar class="sidebar-container" :is-collapse="isHideSidebar" />
    <div class="main-container">
      <div class="fixed-header">
        <Navbar
          :is-hide-sidebar="isHideSidebar"
          @toggleSidebar="toggleSidebar"
        />
      </div>
      <AppMain />
    </div>
  </div>
</template>
<script>
import { Navbar, Sidebar, AppMain } from "./components";
export default {
  name: "Layout",
  components: { Navbar, Sidebar, AppMain },
  data() {
    return {
      isHideSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isHideSidebar = !this.isHideSidebar;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/element-variables.scss";

.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth;
  box-shadow: 0 0 0 1px #dadada;
  //   background-color: $menuBg;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.hideSidebar {
  .main-container {
    margin-left: 64px;
  }
  .fixed-header {
    width: calc(100% - 64px);
  }
  .sidebar-container {
    width: 64px;
  }
}
</style>
