<template>
  <div id="app" data-theme="light">
    <div class="container">
      <div class="wrapper-content">
        <div class="interactive">
          <HiPage />
          <!-- главное меню -->
        </div>
        <div class="pages">
          <transition name="appearance" mode="out-in">
            <!-- преключение между страницамис помощью роута -->

            <router-view></router-view>
          </transition>
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
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  background-color: var(--main-color);
  height: 100%;
}
.wrapper-content {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.appearance-enter-active {
  animation-delay: 4s;
  transition: all 0.3s ease;
}
.appearance-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.appearance-enter, .appearance-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
