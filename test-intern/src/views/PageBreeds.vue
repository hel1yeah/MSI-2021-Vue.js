<template>
  <section class="breeds">
    <div class="search-attitude-wrapper">
      <Search @onSearchBreeds="onSearchBreeds" />
      <Attitude />
    </div>
    <div class="breeds__content">
      <div class="breeds-filter">
        <ButtonClose></ButtonClose>
        <NamePage :nameComponent="nameComponent"></NamePage>
        <select class="breeds-select" v-model="name">
          <option class="breeds-select__option" value="All Breeds">
            All Breeds
          </option>
          <option v-for="(name, index) in nameDogs" :key="index">
            {{ name }}
          </option>
        </select>
        <select class="breeds-select__limit" v-model="limit">
          <option value="all">All</option>
          <option value="5">Limit: 5</option>
          <option value="10">Limit: 10</option>
          <option value="15">Limit: 15</option>
          <option value="20">Limit: 20</option>
        </select>
        <button
          class="breeds-select__abc-up"
          @click="sort('asc')"
          :class="{ 'breeds-select-active': currentSort }"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            />
          </svg>
        </button>
        <button
          class="breeds-select__abc-down"
          @click="sort('desc')"
          :class="{ 'breeds-select-active': !currentSort }"
        >
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
            />
          </svg>
        </button>
      </div>
      <Preloader v-if="loading"></Preloader>
      <div class="grid-container">
        <div
          class="grid-container__item"
          v-for="dog in dogs"
          :key="dog.id"
          :style="{ backgroundImage: `url(${dog.image.url})` }"
        >
          <div class="grid-container__item--hover end">
            <div @click.stop="muveToDogInfo(dog)" class="name-breeds">
              {{ dog.name }}

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import { actionsTypes } from "@/store/modules/breeds";

import Preloader from "@/components/Preloader.vue";
import Search from "@/components/Search.vue";
import Attitude from "@/components/Attitude.vue";
import ButtonClose from "@/components/ButtonClose.vue";
import NamePage from "@/components/NamePage.vue";

export default {
  name: "PageBreeds",
  components: {
    Preloader,
    Search,
    Attitude,
    NamePage,
    ButtonClose,
  },
  data() {
    return {
      nameComponent: "breeds",
      limit: "all",
      name: "All Breeds",
      currentSort: true,
    };
  },
  methods: {
    getBreeds() {
      this.dogs ? "" : this.$store.dispatch(actionsTypes.getBreeds);
    },
    getLimitBreeds() {
      this.$store.dispatch(actionsTypes.getBreedsLimit, { limit: this.limit });
    },
    getForNameBreeds() {
      this.limit = "all";
      this.$store.dispatch(actionsTypes.getForNameBreeds, { name: this.name });
    },
    onSearchBreeds(name) {
      this.$store.dispatch(actionsTypes.onSearchBreeds, name);
    },
    sort(e) {
      e === "asc" ? (this.currentSort = true) : (this.currentSort = false);
      this.$store.dispatch(actionsTypes.sortForName, { sortingType: e });
    },
    muveToDogInfo(dog) {
      this.$router.push({ name: "dogInfo", params: { id: dog.id } });
      this.$store.dispatch(actionsTypes.createDog, { dog: dog });
    },
  },
  computed: {
    ...mapState({
      dogs: (state) => state.breeds.data,
      nameDogs: (state) => state.breeds.breeds,
      loading: (state) => state.breeds.isLoading,
    }),
  },
  created() {
    this.getBreeds();
  },
  watch: {
    limit: function () {
      this.getLimitBreeds();
    },
    name: function () {
      this.getForNameBreeds();
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.breeds {
  width: 680px;
}
.breeds__content {
  background-color: var(--default-block-bg-color);
  padding: 20px;
  border-radius: 20px;
}
.breeds-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 0;
}
.breeds-filter__option {
}
.breeds-select {
  width: 226px;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  color: var(--help-text-color);
  background: var(--breeds-select-bg-color);
  outline: transparent;
  border: transparent;
  cursor: pointer;
}
.breeds-select__option {
  color: var(--help-text-color);
  background: var(--breeds-select-bg-color);
  font-size: 16px;
  line-height: 24px;
  padding: 20px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background: var(--breeds-select-bg-color);
  }
}
.breeds-select__limit {
  width: 100px;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  color: var(--help-text-color);
  background: var(--breeds-select-bg-color);
  outline: transparent;
  border: transparent;
  cursor: pointer;
}

.breeds-select__abc-up,
.breeds-select__abc-down {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--breeds-select-bg-color);
  cursor: pointer;
  fill: var(--help-text-color);
  transition: 0.6s;
  &:hover {
    border: 2px solid var(--hover-color);
    fill: var(--btn-active-bg-color);
  }
  &.breeds-select-active {
    border: 2px solid var(--hover-color);
    fill: var(--btn-active-bg-color);
  }
}

.name-breeds {
  font-size: 16px;
  line-height: 24px;
  color: var(--btn-active-bg-color);
  background-color: var(--default-block-bg-color);
  padding: 5px 5px;
  width: 180px;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto 10px;
  cursor: pointer;
}

.long {
  grid-area: long;
}

.big-right {
  grid-area: big-right;
}
</style>
