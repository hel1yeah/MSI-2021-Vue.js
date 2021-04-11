<template>
  <div id="app">
    <div class="container">
      <div class="wrapper-content">
        <div class="interactive">
          <HiPage />
        </div>
        <div class="pages">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HiPage from "@/components/HiPage.vue";
// import HeaderRight from "@/components/HeaderRight.vue";
// import Voting from "@/components/Voting.vue";
// import Breeds from "@/components/Breeds.vue";
// import Gallery from "@/components/Gallery.vue";
export default {
  components: {
    HiPage,
    // HeaderRight,
    // Voting,
    // Breeds,
    // Gallery,
  },
  data() {
    return {
    };
  },
  methods:{

  }
};
</script>

<style lang="scss">
.wrapper-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

</style>
