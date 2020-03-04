<template>
  <div>
    <el-button type="warning" v-permission="['admin']">admin only</el-button>
    <el-button type="success" v-permission="['editor']">editor only</el-button>
    <el-button type="primary">no-permission</el-button>
  </div>
</template>
<script>
export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.el-button {
  margin: 30px;
}
</style>
