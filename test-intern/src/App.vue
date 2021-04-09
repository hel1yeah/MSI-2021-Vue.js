<template>
  <div id="app">
    <div class="container">
      <div class="wrapper-content">
        <div class="interactive">
          <HiPage @isActive='isActiveAdd'/>
        </div>
        <div class="pages">
          <HeaderRight v-show="isActivePage.headerRight"></HeaderRight>
          <Voting v-show="isActivePage.voting"></Voting>
          <Breeds v-show="isActivePage.breeds"></Breeds>
          <Gallery v-show="isActivePage.gallery"></Gallery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HiPage from "@/components/HiPage.vue";
import HeaderRight from "@/components/HeaderRight.vue";
import Voting from "@/components/Voting.vue";
import Breeds from "@/components/Breeds.vue";
import Gallery from "@/components/Gallery.vue";
export default {
  components: {
    HiPage,
    HeaderRight,
    Voting,
    Breeds,
    Gallery,
  },
  data() {
    return {
      isActivePage: {
        headerRight: true,
        voting: false,
        breeds: false,
        gallery: false,
      },
    };
  },
  methods:{
    isActiveAdd(isActive){
      this.isActivePage = isActive;
    }
  }
};
</script>

<style lang="scss">
.wrapper-content {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.interactive {
}
// .pages {
//   width: 640px;
//   height: 840px;
//   background-color: var(--bgc-title-color);
//   border-radius: 20px;
// }
</style>
