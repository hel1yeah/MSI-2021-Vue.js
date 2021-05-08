<template>
  <div class="dog-like">DogLike
    <div @click="getVotes">test button</div>
  </div>
</template>

<script>

import { actionsTypes } from "@/store/modules/voting";

export default {
  name: "DogLike",
  methods:{
    getVotes(){
      this.$store.dispatch(actionsTypes.getVotes)

    }
  }
};
</script>
<style lang="scss"></style>
