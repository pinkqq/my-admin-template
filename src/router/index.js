import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout/index";

Vue.use(VueRouter);

/**  
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
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
      import(/* webpackChunkName: "login" */ "@/views/login/index")
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
        meta: { title: "首页" }
      },
      {
        path: "page01",
        name: "page01",
        component: () => import("@/views/page01/index"),
        meta: { title: "页面一" }
      },
      {
        path: "page02",
        name: "page02",
        component: () => import("@/views/page02/index"),
        meta: { title: "页面二" }
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
