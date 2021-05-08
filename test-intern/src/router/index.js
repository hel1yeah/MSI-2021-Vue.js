import Vue from "vue";
import VueRouter from "vue-router";

import HeaderRight from "@/views/HeaderRight.vue";
import Voting from "@/views/Voting.vue";
import Breeds from "@/views/Breeds.vue";
import Gallery from "@/views/Gallery.vue";

import DogLike from "@/components/voting/DogLike.vue";
import DogDislike from "@/components/voting/DogDislike.vue";
import DogFavourite from "@/components/voting/DogFavourite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HeaderRight,
  },
  {
    path: "/voting/",
    name: "voting",
    component: Voting,
    children: [
      {
        path: "like",
        name: "dogLike",
        component: DogLike,
      },
      {
        path: "dislike",
        name: "dogDislike",
        component: DogDislike,
      },
      {
        path: "favourite",
        name: "dogFavourite",
        component: DogFavourite,
      },
    ],
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
