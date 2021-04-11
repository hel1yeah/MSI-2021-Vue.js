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
import HiPage from "@/views/HiPage.vue";

export default {
  components: {
    HiPage,

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
