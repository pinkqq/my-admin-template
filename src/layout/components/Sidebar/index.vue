<template>
  <div>
    <div class="sidebar-logo-container">
      <router-link to="/" class="sidebar-logo">
        <img
          alt="logo-aside"
          :src="
            require('@/assets/' + (isCollapse ? 'logo-thumb.png' : 'logo.png'))
          "
        />
      </router-link>
    </div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapse"
      :text-color="variables.menuText"
      :active-text-color="variables.menuActiveText"
      :unique-opened="false"
      :collapse-transition="false"
      :router="true"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import variables from "@/styles/element-variables.scss";
import sidebarItem from "./sidebarItem";
export default {
  name: "Sidebar",
  props: { isCollapse: { type: Boolean, default: false } },
  components: { sidebarItem },
  data() {
    return {
      variables: variables
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>
<style lang="scss" scoped>
.sidebar-logo-container {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 60px;

  .sidebar-logo {
    // width: 150px;
    height: 26px;
    padding-left: 17px;

    img {
      height: 100%;
    }
  }
}
</style>
