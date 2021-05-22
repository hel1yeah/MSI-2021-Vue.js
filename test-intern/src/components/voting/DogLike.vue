<template>
  <div class="dog-like">
    DogLike
    <div class="dog-like__info">
      <ButtonClose></ButtonClose>
    </div>
    <div class="grid-container">
      <div
        class="grid-container__item"
        v-for="dog in dogsLikes"
        :key="dog.id"
        :style="{ backgroundImage: `url(${dog.url})` }"
      >
        <div class="grid-container__item--hover"></div>
      </div>
    </div> 
    <div @click="getVotes">test getVotes</div>
    <div @click="getSearchDogsLike">test getSearchDogsLike</div>
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
    getSearchDogsLike() {
      this.$store.dispatch(actionsTypes.getSearchDogsLike, this.like);
    },
  },
  computed: {
    ...mapState({
      dogsLikes: (state) => state.voting.isSearchDogsLike,
    }),
  },
  created() {
    // this.getVotes();
    this.getSearchDogsLike();
  },
};
</script>
<style lang="scss"></style>
