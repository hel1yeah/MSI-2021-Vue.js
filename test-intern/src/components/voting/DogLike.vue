<template>
  <div class="dog-like">
    <div class="dog-like__info">
      <ButtonClose></ButtonClose>
      <div class="dog-like__info__name-component">
        <NamePage :nameComponent="nameComponent"></NamePage>
      </div>
    </div>
    <Preloader v-if="isLoading" />
    <div class="grid-container" v-if="isLoading !== true">
      <div
        class="grid-container__item"
        v-for="dog in dogsLikes"
        :key="dog.id"
        :style="{ backgroundImage: `url(${dog.url})` }"
      >
        <div class="grid-container__item--hover">
          <div class="dog-like__active-img" @click="voteDelete(dog.vote_id)">
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
  name: "DogLike",
  components: {
    ButtonClose,
    Preloader,
    NamePage,
  },
  data() {
    return {
      like: "like",
      nameComponent: "Likes",
    };
  },
  methods: {
    getVotes() {
      this.$store.dispatch(actionsTypes.getVotes).then(() => {
        this.getSearchDogs();
      });
    },
    getSearchDogs() {
      this.$store.dispatch(actionsTypes.getSearchDogs, this.like);
    },
    voteDelete(vote_id) {
      this.$store.dispatch(actionsTypes.voteDelete, vote_id).then(() => {
        this.getVotes();
      });
    },
  },
  computed: {
    ...mapState({
      dogsLikes: (state) => state.voting.isSearchDogs,
      isLoading: (state) => state.voting.isLoading,
    }),
  },
  mounted() {
    this.getVotes();
    // this.getSearchDogs();
  },
};
</script>
<style lang="scss">
// .dog-like-grid-container {
//   display: grid;
//   gap: 20px;
//   grid-template-columns: repeat(3, minmax(140px, 200px));
//   grid-auto-rows: minmax(140px, 200px);
// }
// .dog-like-grid-container__item {
//   width: 100%;
//   height: 100%;

//   background-position: center center;
//   background-size: cover;
//   background-repeat: no-repeat;

//   position: relative;
//   border-radius: 20px;
//   overflow: hidden;
//   transition: var(--speed);
// &:nth-child(10n + 1) {
//     grid-row: span 2;
//   }
//   &:nth-child(10n + 4) {
//     grid-column: 2/4;
//     grid-row: span 2;
//   }
//   &:nth-child(10n + 6) {
//     grid-row: auto;
//   }
//   &:nth-child(10n + 8) {
//     grid-column: 3;
//     grid-row: span 2;
//   }
//   &:nth-child(10n + 9) {
//     grid-column: 1/3;
//     grid-row: span 2;
//   }
//   &:hover .dog-like-grid-container__item--hover {
//     top: 0;
//   }
// }

// .dog-like-grid-container__item--hover {
//   transition: var(--speed);
//   position: absolute;
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   top: 100%;
//   left: 0;
//   background-color: var(--hover-grid-card-color);
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

.dog-like__active-img {
  background-color: var(--time-bg-color);
  border-radius: 10px;
  padding: 9px 10px;
  display: flex;
  cursor: pointer;

  & svg {
    fill: var(--btn-active-bg-color);
  }
}
.dog-like__info {
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
}
.dog-like__info__name-component{
  margin: 0 0 0 10px;
}
</style>
