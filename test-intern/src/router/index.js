import Vue from "vue";
import VueRouter from "vue-router";

import HeaderRight from "@/views/HeaderRight.vue";
import PageVoting from "@/views/PageVoting.vue";
import PageBreeds from "@/views/PageBreeds.vue";
import PageGallery from "@/views/PageGallery.vue";

import DogVote from "@/components/voting/DogVote.vue";
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
    component: PageVoting,
    children: [
      {
        path: "vote",
        name: "dogVote",
        component: DogVote,
      },
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
    component: PageBreeds,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: PageGallery,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
