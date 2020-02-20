import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index";

Vue.use(VueRouter);

/**  
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb 
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login/index"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index"),
        meta: { title: "首页", icon: "el-icon-location" }
      }
    ]
  },
  {
    path: "/page",
    component: Layout,
    redirect: "/page/01",
    meta: { title: "页面", icon: "el-icon-menu" },
    children: [
      {
        path: "01",
        name: "page01",
        component: () => import("@/views/page01/index"),
        meta: { title: "页面一" }
      },
      {
        path: "02",
        name: "page02",
        component: () => import("@/views/page02/index"),
        meta: { title: "页面二" }
      }
    ]
  },
  {
    path: "/example",
    component: Layout,
    redirect: "/example/01",
    meta: { title: "实例", icon: "el-icon-setting" },
    children: [
      {
        path: "01",
        name: "eg01",
        component: () => import("@/views/page01/index"),
        meta: { title: "实例一" }
      },
      {
        path: "02",
        name: "eg02",
        component: () => import("@/views/page02/index"),
        meta: { title: "实例二" }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
