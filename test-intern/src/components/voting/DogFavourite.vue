<template>
  <div class="dog-favourite">
    DogFavourite
    <div @click="getVotesFavorite">test button</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { actionsTypes } from "@/store/modules/voting";

export default {
  name: "DogFavourite",
  methods: {
    getVotesFavorite() {
      this.$store.dispatch(actionsTypes.getVotesFavorite);
    },
  },
  computed: {
    ...mapState({
      favorites: (state) => state.voting.isVotesFavorite,
    }),
  },
  created() {
    this.getVotesFavorite();
  },
};
</script>
<style lang="scss"></style>
