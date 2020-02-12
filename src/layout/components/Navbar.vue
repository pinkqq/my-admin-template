<template>
  <div class="navbar">
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
export default {
  name: "Navbar",
  methods: {
    logout() {
      // todo logout
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;
  padding: 0 20px;
  cursor: pointer;
}
</style>
