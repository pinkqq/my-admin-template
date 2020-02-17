<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <el-menu-item
        v-if="onlyOneChild.meta"
        :index="resolvePath(onlyOneChild.path)"
        class="submenu-title-noDropdown"
      >
        <span slot="title">{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <span v-if="item.meta">{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      ></sidebar-item>
    </el-submenu>
  </div>
</template>
<script>
import path from "path";
import { isExternal } from "@/utils/validate";

export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  data() {
    return { onlyOneChild: null };
  },
  methods: {
    hasOneShowingChild(children = [], parent) {
      const showingChidren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChidren.length === 1) {
        return true;
      }
      if (showingChidren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      //绝对路径拼接
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
