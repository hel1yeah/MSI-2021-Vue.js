<template>
  <div class="dog-like">
    DogLike
    <div class="dog-like__info">
      <ButtonClose></ButtonClose>
    </div>
    <div @click="getVotes">test getVotes</div>
    <div @click="getSearchDogs">test getSearchDogs</div>
    <div class="dog-like-grid-container">
      <div
        class="dog-like-grid-container__item"
        v-for="dog in dogsLikes"
        :key="dog.id"
        :style="{ backgroundImage: `url(${dog.url})` }"
      >
        <div class="dog-like-grid-container__item--hover">
          <div class="dog-like__active-img" @click="voteUnLike(dog.breeds[0].reference_image_id)">
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

export default {
  components: {
    ButtonClose,
  },
  data() {
    return {
      like: "like",
    };
  },
  name: "DogLike",
  methods: {
    getVotes() {
      this.$store.dispatch(actionsTypes.getVotes);
    },
    getSearchDogs() {
      this.$store.dispatch(actionsTypes.getSearchDogs, this.like);
    },
    voteUnLike(id) {
      console.log(id);
      this.$store.dispatch(actionsTypes.voteDislike, id);
    },
  },
  computed: {
    ...mapState({
      dogsLikes: (state) => state.voting.isSearchDogs,
    }),
  },
  created() {},
  mounted() {
    this.getSearchDogs();
  },
};
</script>
<style lang="scss">
.dog-like-grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(140px, 200px));
  grid-template-rows: repeat(9, minmax(140px, 200px));
  gap: 20px 20px;
}
.dog-like-grid-container__item {
  width: 100%;
  height: 100%;

  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 140px;
  min-height: 140px;

  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: var(--speed);
  &:nth-child(2) {
    grid-area: 1 / 1 / span 2 / 1;
  }
  &:nth-child(5) {
    grid-area: 2 / 2 / span 2 / span 2;
  }
  &:nth-child(7) {
    grid-area: 4 / 3 / span 2 / 4;
  }
  &:nth-child(10) {
    grid-area: 5 / 1 / span 2 / span 2;
  }
  &:nth-child(12) {
    grid-area: 7 / 1 / span 2 / 1;
  }
  &:nth-child(15) {
    grid-area: 8 / 2 / span 2 / span 2;
  }
  &:hover .dog-like-grid-container__item--hover {
    top: 0;
  }
}

.dog-like-grid-container__item--hover {
  transition: var(--speed);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  background-color: var(--hover-grid-card-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

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
</style>
