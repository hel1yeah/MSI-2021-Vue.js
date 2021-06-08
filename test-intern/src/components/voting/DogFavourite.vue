<template>
  <div class="dog-favourite">
    <div class="dog-like__info">
      <ButtonClose></ButtonClose>
      <div class="dog-like__info__name-component">
        <NamePage :nameComponent="nameComponent"></NamePage>
      </div>
    </div>
    <Preloader v-if="isLoading" />
    <div class="dog-like-grid-container" v-if="isLoading !== true">
      <div
        class="dog-like-grid-container__item"
        v-for="dog in isVotesFavorite"
        :key="dog.id"
        :style="{ backgroundImage: `url(${dog.image.url})` }"
      >
        <div class="dog-like-grid-container__item--hover">
          <div
            class="dog-like__active-img"
            @click="voteDeleteFavorite(dog.id)"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path
                d="M8.07107 2C3.61354 2 0 5.61354 0 10.0711C0 12.2116 0.850339 14.2646 2.36396 15.7782L14.2929 27.7071C14.6834 28.0976 15.3166 28.0976 15.7071 27.7071L27.636 15.7782C29.1497 14.2646 30 12.2116 30 10.0711C30 5.61354 26.3865 2 21.9289 2C19.7884 2 17.7354 2.85034 16.2218 4.36396L15 5.58579L13.7782 4.36396C12.2646 2.85034 10.2116 2 8.07107 2Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import { actionsTypes } from "@/store/modules/voting";

import ButtonClose from "@/components/ButtonClose";
import Preloader from "@/components/Preloader";
import NamePage from "@/components/NamePage";
export default {
  name: "DogFavourite",
  components: {
    ButtonClose,
    Preloader,
    NamePage,
  },
  data() {
    return {
      favorites: "favorites",
      nameComponent: "Favorites",
    };
  },
  methods: {
    getVotesFavorite() {
      this.$store.dispatch(actionsTypes.getVotesFavorite);
    },
    voteDeleteFavorite(vote_id) {
      this.$store
        .dispatch(actionsTypes.voteDeleteFavorite, vote_id)
        .then(() => {
          this.getVotesFavorite();
        });
    },
  },
  computed: {
    ...mapState({
      isVotesFavorite: (state) => state.voting.isVotesFavorite,
      isLoading: (state) => state.voting.isLoading,
    }),
  },
  created() {
    this.getVotesFavorite();
  },
};
</script>
<style lang="scss"></style>
