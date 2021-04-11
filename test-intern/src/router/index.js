import Vue from "vue";
import VueRouter from "vue-router";

import HeaderRight from "@/components/HeaderRight.vue";
import Voting from "@/components/Voting.vue";
import Breeds from "@/components/Breeds.vue";
import Gallery from "@/components/Gallery.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HeaderRight,
  },
  {
    path: "/voting",
    name: "voting",
    component: Voting,
  },
  {
    path: "/breeds",
    name: "breeds",
    component: Breeds,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: Gallery,
  },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
