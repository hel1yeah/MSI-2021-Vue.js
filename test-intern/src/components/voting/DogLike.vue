<template>
  <div class="dog-like">
    DogLike
    <div class="dog-like__info">
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
  name: "DogLike",
  methods: {
    getVotes() {
      this.$store.dispatch(actionsTypes.getVotes);
    },
  },
  computed: {
    ...mapState({
      vote: (state) => state.voting.isVotes,
    }),
  },
  created() {
    this.getVotes();
  },
};
</script>
<style lang="scss"></style>
