<template>
  <div class="dog-like">
    DogLike
    <div class="dog-like__info">
      <ButtonClose></ButtonClose>
    </div>

    <div @click="getVotes">test getVotes</div>
    <div @click="getSearchDogs">test getSearchDogs</div>
    {{ like }}
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
  name: "DogLike",
  methods: {
    getVotes() {
      this.$store.dispatch(actionsTypes.getVotes);
    },
    getSearchDogs() {
      this.$store.dispatch(actionsTypes.getSearchDogs);
    },
  },
  computed: {
    ...mapState({
      like: (state) => state.voting.isVotesLike,
    }),
  },
  created() {
    this.getVotes();
  },
};
</script>
<style lang="scss"></style>
