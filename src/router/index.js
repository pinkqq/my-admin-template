import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "@/utils/auth";
import Layout from "@/layout/index";
import store from "@/store";

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

export const constantRoutes = [
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
  }
];

export const asyncRoutes = [
  {
    path: "/permission",
    component: Layout,
    children: [
      {
        path: "",
        name: "permission",
        component: () => import("@/views/permission/index"),
        meta: { title: "admin only", roles: ["admin"], icon: "el-icon-setting" }
      }
    ]
  }
];

const createRouter = () =>
  new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });
const router = createRouter();

// permission control

const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  const token = getToken();
  if (token) {
    if (to.path === "/login") {
      next("/");
    } else if (store.getters.roles && store.getters.roles.length > 0) {
      next();
    } else {
      try {
        store.dispatch("user/getInfo").then(res => {
          const roles = res.roles;
          // 生成可访问的路由表
          store.dispatch("permission/generateRoutes", roles).then(routes => {
            router.addRoutes(routes);
            next({ ...to, replace: true });
          });
        });
      } catch (error) {
        // remove token and go to login page to re-login
        debugger;
        // await store.dispatch("user/resetToken");
        // Message.error(error || "Has Error");
        // next(`/login?redirect=${to.path}`);
      }
    }
  } else {
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login?redirect=" + to.fullPath);
    }
  }
});

export function resetRouter() {
  const newRouter = createRouter();
  // 替换现有router的routes
  router.matcher = newRouter.matcher;
}

export default router;
