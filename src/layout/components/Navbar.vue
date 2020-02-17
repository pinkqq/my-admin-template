<template>
  <div class="navbar">
    <!-- <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
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
  components: { Breadcrumb },
  //   data() {
  //     return { isCollapse: true };
  //   },
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

.breadcrumb-container {
  float: left;
}

.right-menu {
  float: right;
  height: 100%;
  line-height: 50px;
  padding: 0 20px;
  cursor: pointer;
}
</style>
