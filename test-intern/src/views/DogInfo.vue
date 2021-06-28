<template>
  <section class="dog-info">
    <div class="search-attitude-wrapper">
      <Search @onSearchBreeds="onSearchBreeds" />
      <Attitude />
    </div>
    <div class="dog-info__content">
      <div class="dog-info__support">
        <ButtonClose></ButtonClose>
        <NamePage :nameComponent="nameComponent"></NamePage>
        <div class="dog-info__id">{{ this.dog.id }}</div>
      </div>
      <div
        class="dog-info__img"
        :style="{ backgroundImage: `url(${dog.image.url})` }"
      ></div>
      <div class="dog-info__descr-frame">
        <h1 class="dog-info__name">{{ this.dog.name }}</h1>
        <p class="breed_for">{{ this.dog.bred_for }}</p>
        <div class="dog-info__descr">
          <div class="dog-info__descr-temperament">
            <p class="dog-info__descr-temperament-item">
              <span>Temperament :</span> {{ this.dog.temperament }}
            </p>
          </div>
          <div class="dog-info__descr-size">
            <p class="dog-info__descr-size-item">
              <span>Height :</span> {{ this.dog.height.metric }}
            </p>
            <p class="dog-info__descr-size-item">
              <span>Weight :</span> {{ this.dog.weight.metric }}
            </p>
            <p class="dog-info__descr-size-item">
              <span>Life span :</span> {{ this.dog.life_span }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import Search from "@/components/Search.vue";
import Attitude from "@/components/Attitude.vue";
import NamePage from "@/components/NamePage.vue";
import ButtonClose from "@/components/ButtonClose.vue";
export default {
  name: "DogInfo",
  components: {
    Search,
    Attitude,
    NamePage,
    ButtonClose,
  },
  data() {
    return {
      nameComponent: "breeds",
    };
  },
  methods: {
    test() {
      console.log(dog);
    },
    onSearchBreeds(name) {
      this.$store.dispatch(actionsTypes.onSearchBreeds, name);
    },
  },
  computed: {
    ...mapState({
      dog: (state) => state.breeds.dog,
      // id: (state) => state.breeds.dog.id,
    }),
  },
  mounted() {
    this.test();
  },
};
</script>

<style lang="scss">
.dog-info {
  width: 680px;
}
.dog-info {
}
.search-attitude-wrapper {
}
.dog-info__content {
  background-color: var(--default-block-bg-color);
  padding: 20px;
  border-radius: 20px;
}
.dog-info__support {
  display: flex;
  align-items: center;
  justify-content: start;

  & :not(:last-child) {
    margin: 0 10px 0 0;
  }
}
.dog-info__id {
  text-align: center;
  border-radius: 10px;
  background-color: var(--btn-active-bg-color);
  padding: 5px 30px;
  text-transform: uppercase;
  color: var(--while-color);
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
}
.dog-info__img {
  background-position: center center;
  background-size: cover;
  background-color: #fff;
  background-repeat: no-repeat;
  width: 100%;
  height: 360px;
  border-radius: 20px;
  margin: 20px 0 0 0;
}
.dog-info__descr-frame {
  border: 2px solid var(--header-card-active-color);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 0px 40px 40px;
  margin: 50px 0 0 0;
  text-align: center;
}

.dog-info__name {
  display: inline-block;
  font-weight: 500;
  font-size: 36px;
  margin: -26px 0 0 0;
  padding: 0 40px;
  background-color: var(--default-block-bg-color);
}
.breed_for {
  margin: 0 0 0 0;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: var(--help-text-color);
  text-align: center;
}
.dog-info__descr {
  text-align: left;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  font-size: 16px;
  line-height: 23px;
  color: var(--help-text-color);
  & span {
    font-weight: 700;
    color: var(--bold-text-color);
  }
}
.dog-info__descr-temperament {
  width: 270px;
}
.dog-info__descr-temperament-item {
}
.dog-info__descr-size {
  width: 270px;
}
.dog-info__descr-size-item {
}
</style>
