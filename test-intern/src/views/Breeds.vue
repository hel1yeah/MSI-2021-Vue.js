<template>
  <section class="breeds">
    <div class="search-attitude-wrapper">
      <Search @getBreeds="getBreeds" />
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
        <button class="breeds-select__abc-up">
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
        <button class="breeds-select__abc-down">
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
        <div class="grid-container__item" v-for="dog in dogs" :key="dog.id">
          <img
            class="grid-container__item--img"
            :src="dog.image.url"
            :alt="dog.name"
          />
          <div class="grid-container__item--hover">
            <div class="name-breeds">{{ dog.name }}</div>
          </div>
        </div>
        <!-- <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/2.jpg"
            alt="1"
          />
          <div class="grid-container__item--hover">
            <div class="name-breeds">Affenpinscher</div>
          </div>
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/3.jpg"
            alt="1"
          />
          <div class="grid-container__item--hover">
            <div class="name-breeds">Affenpinscher</div>
          </div>
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/4.jpg"
            alt="1"
          />
          <div class="grid-container__item--hover">
            <div class="name-breeds">Affenpinscher</div>
          </div>
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/5.jpg"
            alt="1"
          />
          <div class="grid-container__item--hover">
            <div class="name-breeds">Affenpinscher</div>
          </div>
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/6.jpg"
            alt="1"
          />
          <div class="grid-container__item--hover">
            <div class="name-breeds">Affenpinscher</div>
          </div>
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/8.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/9.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/10.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/11.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/4.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/5.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/6.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/8.jpg"
            alt="1"
          />
        </div>
        <div class="grid-container__item">
          <img
            class="grid-container__item--img"
            src="./../assets/images/dogs/9.jpg"
            alt="1"
          />
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import { actionsTypes } from "@/store/modules/breeds";

import Preloader from "@/components/Preloader.vue";
import Search from "@/components/Search.vue";
import Attitude from "@/components/Attitude.vue";
import ButtonClose from "@/components/ButtonClose.vue";
import NamePage from "@/components/NamePage.vue";

export default {
  name: "Breeds",
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
    };
  },
  methods: {
    getBreeds() {
      this.$store.dispatch(actionsTypes.getBreeds);
    },
    getLimitBreeds() {
      this.$store.dispatch(actionsTypes.getBreedsLimit, { limit: this.limit });
    },
    getForNameBreeds() {
      this.limit = "all";
      this.$store.dispatch(actionsTypes.getForNameBreeds, { name: this.name });
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
  background-color: var(--while-color);
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
  color: var(--gray-color);
  background: var(--options-color);
  outline: transparent;
  border: transparent;
  cursor: pointer;
}
.breeds-select__option {
  color: var(--gray-color);
  background: var(--options-color);
  font-size: 16px;
  line-height: 24px;
  padding: 20px;
  height: 30px;
  cursor: pointer;
  &:hover {
    background: var(--options-color);
  }
}
.breeds-select__limit {
  width: 100px;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  color: var(--gray-color);
  background: var(--options-color);
  outline: transparent;
  border: transparent;
  cursor: pointer;
}
// .breeds-select__limit--option {
//   color: var(--gray-color);
//   background: var(--options-color);
//   font-size: 16px;
//   line-height: 24px;
//   padding: 20px;
//   height: 30px;
//   cursor: pointer;
//   &:hover {
//     background: var(--options-color);
//   }
// }
.breeds-select__abc-up,
.breeds-select__abc-down {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: var(--options-color);
  cursor: pointer;
  fill: var(--gray-color);
  transition: 0.6s;
  &:hover {
    border: 2px solid var(--hover-color);
    fill: var(--pink-color);
  }
}
.breeds-select__abc-up {
}
.breeds-select__abc-down {
}

.grid-container {
  grid-template-columns: repeat(3, minmax(140px, 200px));
  grid-template-rows: repeat(9, minmax(140px, 200px));
  gap: 20px 20px;
}
.grid-container__item {
  width: 200px;
  // min-width: 140px;
  // min-height: 140px;
  height: 140px;

  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: var(--speed);
  &:nth-child(1) {
    grid-area: 1 / 1 / span 2 / 1;
  }
  &:nth-child(5) {
    grid-area: 2 / 2 / span 2 / span 2;
  }
  &:nth-child(8) {
    grid-area: 4 / 3 / span 2 / 4;
  }
  &:nth-child(10) {
    grid-area: 5 / 1 / span 2 / span 2;
  }
  &:nth-child(12) {
    grid-area: 7 / 1 / span 2 / 1;
  }
  &:nth-child(15) {
    grid-area: 8 / 2 / span 2 / span 2;
  }
  &:hover .grid-container__item--hover {
    top: 0;
  }
}
.grid-container__item--img {
  width: 100%;
  transform: scale(1.1);

  background-color: var(--fiolet-card-color);
}
.grid-container__item--hover {
  transition: var(--speed);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  background-color: var(--pink-color);

  display: flex;
  align-items: flex-end;
}

.name-breeds {
  font-size: 16px;
  line-height: 24px;
  color: var(--pink-color);
  background-color: var(--while-color);
  padding: 5px 5px;
  min-width: 80%;
  text-align: center;
  border-radius: 10px;
  margin: 0 auto 10px;
}

.long {
  grid-area: long;
}

.big-right {
  grid-area: big-right;
}
</style>
