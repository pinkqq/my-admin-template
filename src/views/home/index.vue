<template>
  <div>
    <el-button v-permission="['admin']" type="warning">
      admin only
    </el-button>
    <el-button v-permission="['editor']" type="success">
      editor only
    </el-button>
    <el-button type="primary">
      no-permission
    </el-button>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.el-button {
  margin: 30px;
}
</style>
