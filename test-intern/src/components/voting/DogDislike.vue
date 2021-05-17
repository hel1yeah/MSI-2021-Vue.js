<template>
  <div class="dog-dislike">
    DogDislike
    <div class="dog-dislike__info">
      <ButtonClose></ButtonClose>
    </div>
    <div @click="getVotes">test button</div>
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
  name: "DogDislike",
  methods: {
    getVotes() {
      this.$store.dispatch(actionsTypes.getVotes);
    },
  },
  computed: {
    ...mapState({
      like: (state) => state.voting.isVotesDisLike,
    }),
  },
  created() {
    this.getVotes();
  },
};
</script>
<style lang="scss"></style>
