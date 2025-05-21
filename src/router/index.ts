import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // path: '/',
      // name: 'LoginTest',
      // components: {
      //   default: () => import('@/views/Login/LoginTest.vue'),
      // },
      path: "/",
      name: "LoginPage",
      components: {
        default: () => import("@/views/Login/LoginPage.vue"),
      },
    },
    {
      path: "/GoldLayoutTest",
      name: "GoldLayoutPage",
      components: {
        default: () => import("@/views/GoldLayout.vue"),
      },
    },
    {
      path: "/main",
      name: "Mainviewpage",
      component: () => import("@/views/Mainviewpage.vue"),
      children: [
        {
          path: "Overview",
          component: () => import("@/views/Pages/Overview.vue"),
        },
        {
          path: "Users",
          component: () => import("@/views/User/Users.vue"),
        },
        {
          path: "Wells",
          component: () => import("@/views/Wells/Wells.vue"),
        },
        {
          path: "WellInfo",
          component: () => import("@/views/Wells/WellInfo.vue"),
        },
        {
          path: "DrillInfo",
          component: () => import("@/views/Wells/DrillInfo.vue"),
        },
        {
          path: "WorkZone",
          component: () => import("@/views/WorkZone/WorkZone.vue"),
        },
        {
          path: "Dictionary",
          component: () => import("@/views/Dictionary/Dictionary.vue"),
        },
      ],
    },
    {
      path: "/RealTime",
      name: "RealTime",
      components: {
        default: () => import("@/views/RealTime/RealTime.vue"),
      },
    },
    {
      path: "/WorkAreaInfo",
      name: "WorkAreaInfo",
      components: {
        default: () => import("@/views/WorkAreaInfo/WorkAreaInfo.vue"),
      },
    },
    {
      path: "/:catchAll(.*)", //不识别的path自动匹配484
      // redirect:'/404',
      redirect: "/",
    },
    {
      path: "/Home",
      name: "Home",
      components: {
        default: () => import("@/views/Home/index.vue"),
      },
    },
    {
      path: "/Map",
      name: "Map",
      components: {
        default: () => import("@/views/Map/index.vue"),
      },
    },
    {
      path: "/DashBoard",
      name: "DashBoard",
      components: {
        default: () => import("@/views/DashBoard/index.vue"),
      },
    },
    {
      path: "/Test",
      name: "Test",
      components: {
        default: () => import("@/views/Test/index.vue"),
      },
    },
    // 其他路由可以在这里添加
  ],
});

export default router;
