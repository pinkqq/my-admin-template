<template>
  <div class="navbar">
    <i
      class="hamburger"
      :class="isHideSidebar ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="toggleSidebar"
    ></i>
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown>
        <span class="avatar-wrapper">
          荷包蛋
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            Logout
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "Navbar",
  props: {
    isHideSidebar: {
      type: Boolean,
      default: false
    }
  },
  components: { Breadcrumb },
  //   data() {
  //     return { isCollapse: true };
  //   },
  methods: {
    logout() {
      // todo logout
      this.$store.dispatch("user/logout").then(() => {
        this.$router.push("/login");
      });
    },
    toggleSidebar() {
      this.$emit("toggleSidebar");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/element-variables.scss";

.navbar {
  height: $navbarHeight;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.breadcrumb-container {
  float: left;
}

.hamburger {
  float: left;
  padding: 0 20px;
  height: 100%;
  font-size: 16px;
  line-height: $navbarHeight;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}

.right-menu {
  float: right;
  height: 100%;
  line-height: $navbarHeight;
  padding: 0 20px;
  cursor: pointer;
}
</style>
