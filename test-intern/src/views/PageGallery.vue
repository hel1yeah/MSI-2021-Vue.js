<template>
  <section class="gallery">
    <div class="search-attitude-wrapper">
      <Search />
      <Attitude />
    </div>
    <div class="gallery-content">
      <div class="gallery-content__title">
        <div class="gallery-content__title--item">
          <ButtonClose></ButtonClose>
          <NamePage :nameComponent="nameComponent"></NamePage>
        </div>
        <ButtonUpload></ButtonUpload>
      </div>
      <div class="gallery-content__filters">
        <div class="gallery-content__filters--item">
          <div class="gallery-content__filters--inner">
            <label class="gallery-label">order</label>
            <select class="gallery-select" v-model="random">
              <option class="gallery-select__option" value="random">
                Random
              </option>
              <option class="gallery-select__option" value="desc">Desc</option>
              <option class="gallery-select__option" value="asc">Asc</option>
            </select>
          </div>
        </div>
        <div class="gallery-content__filters--item">
          <div class="gallery-content__filters--inner">
            <label class="gallery-label">type</label>
            <select class="gallery-select" v-model="mime_types">
              <option class="gallery-select__option" value="gif,jpg,png">
                All
              </option>
              <option class="gallery-select__option" value="jpg">Static</option>
              <option class="gallery-select__option" value="gif">
                Animated
              </option>
            </select>
          </div>
        </div>
        <div class="gallery-content__filters--item">
          <div class="gallery-content__filters--inner">
            <label class="gallery-label">Breed</label>
            <select class="gallery-select" v-model="breed_id">
              <option class="gallery-select__option" value="">None</option>
              <option
                v-for="(breed, index) in breeds"
                :key="index"
                :value="breed.id"
              >
                {{ breed.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="gallery-content__filters--item">
          <div class="gallery-content__filters--inner">
            <label class="gallery-label">limit</label>
            <select class="gallery-select" v-model="limit">
              <option class="gallery-select__option" value="5">
                5 items per page
              </option>
              <option class="gallery-select__option" value="10">
                10 items per page
              </option>
              <option class="gallery-select__option" value="15">
                15 items per page
              </option>
              <option class="gallery-select__option" value="20">
                20 items per page
              </option>
            </select>
          </div>
          <button class="btn-update-arrow" @click="setDefaultSettings">
            <svg
              class="btn-update-arrow__img"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.48189 2.49989L6.93396 0.953004L7.88633 0L11.0577 3.16928L7.88634 6.33873L6.93395 5.38576L8.47232 3.84832C4.51244 3.99813 1.3473 7.25498 1.3473 11.2478C1.3473 15.3361 4.66547 18.6527 8.75744 18.6527C12.8494 18.6527 16.1676 15.3361 16.1676 11.2478V10.5742H17.5149V11.2478C17.5149 16.081 13.5927 20 8.75744 20C3.92221 20 0 16.081 0 11.2478C0 6.50682 3.77407 2.64542 8.48189 2.49989Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="grid-container__wrapper gallery-grid-container__wrapper">
        <Preloader v-if="loading"></Preloader>
        <div class="grid-container" v-if="loading === loading">
          <div
            class="grid-container__item"
            v-for="dog in dogs"
            :key="dog.id"
            :style="{ backgroundImage: `url(${dog.url})` }"
          >
            <div
              class="grid-container__item--hover gallery-grid-container__item--hover"
            >
              <button
                class="button-favorite"
                @click="voteFavouriteImage(dog.id)"
              >
                <svg
                  class="button-favorite__img"
                  viewBox="0 0 30 26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import { actionsTypes as actionsTypesBreeds } from "@/store/modules/breeds";

import { actionsTypes as actionsTypesGallery } from "@/store/modules/gallery";

import Preloader from "@/components/Preloader.vue";
import Search from "@/components/Search.vue";
import Attitude from "@/components/Attitude.vue";
import ButtonClose from "@/components/ButtonClose.vue";
import NamePage from "@/components/NamePage.vue";
import ButtonUpload from "@/components/ButtonUpload.vue";

export default {
  name: "PageGallery",
  components: {
    Preloader,
    Search,
    Attitude,
    NamePage,
    ButtonClose,
    ButtonUpload,
  },
  data() {
    return {
      nameComponent: "gallery",
      mime_types: "gif,jpg,png",
      limit: 5,
      random: "random",
      breed_id: "",
    };
  },
  methods: {
    getBreedsFirtsLoadPage() {
      this.dogs
        ? ""
        : this.$store.dispatch(actionsTypesBreeds.getBreeds).then(() => {
            this.getSearchDogs();
          });
    },
    getBreeds() {
      this.$store.dispatch(actionsTypesBreeds.getBreeds).then(() => {
        this.getSearchDogs();
      });
    },
    getSearchDogs() {
      this.$store.dispatch(actionsTypesGallery.getSearchDogs, {
        mime_types: this.mime_types,
        limit: this.limit,
        random: this.random,
        breed_id: this.breed_id,
      });
    },
    setDefaultSettings() {
      this.mime_types = "gif,jpg,png";
      this.limit = 5;
      this.random = "random";
      this.breed_id = "";
    },
    voteFavouriteImage(id) {
      this.$store.dispatch(actionsTypesGallery.voteFavouriteImage, id);
    },
  },
  computed: {
    ...mapState({
      breeds: (state) => state.breeds.data,
      loading: (state) => state.gallery.isLoading,
      dogs: (state) => state.gallery.data,
    }),
  },
  mounted() {
    this.getBreedsFirtsLoadPage();
  },
  watch: {
    mime_types: function () {
      this.getBreeds();
    },
    limit: function () {
      this.getBreeds();
    },
    random: function () {
      this.getBreeds();
    },
    breed_id: function () {
      this.getBreeds();
    },
  },
};
</script>

<style lang="scss">
.grid-container__wrapper {
  position: relative;
  padding: 20px 0;
}

.gallery {
  width: 680px;
}
.gallery-content {
  background-color: var(--default-block-bg-color);
  border-radius: 20px;
  padding: 20px;
}
.gallery-content__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
}
.gallery-content__title--item {
  display: flex;
  width: 200px;

  & > a {
    margin: 0 10px 0 0;
  }
}
.gallery-content__filters {
  background-color: var(--options-color);
  border-radius: 20px;
  padding: 10px 20px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.gallery-content__filters--item {
  display: flex;
  width: 290px;
  align-items: flex-end;
}
.gallery-content__filters--inner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}
.gallery-label {
  padding: 5px 0 5px 10px;

  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 18px;

  text-transform: uppercase;
  color: var(--help-text-color);
  letter-spacing: 1px;
}
.gallery-select {
  width: 100%;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  // color: var(--bold-text-color);
  background: var(--default-block-bg-color);
  outline: transparent;
  border: transparent;
  cursor: pointer;
}
.gallery-select__option {
  color: var(--help-text-color);
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
.btn-update-arrow {
  width: 46px;
  height: 40px;

  background: var(--default-block-bg-color);
  border-radius: 10px;
  margin: 0 0 0 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: var(--speed);
  &:hover {
    background: var(--btn-active-bg-color);
  }
  &:hover .btn-update-arrow__img {
    fill: var(--default-block-bg-color);
  }
}
.btn-update-arrow__img {
  transition: var(--speed);
  width: 18px;
  height: 20px;
  fill: var(--btn-active-bg-color);
}

.gallery-grid-container__wrapper {
}
.gallery-grid-container__item--hover {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-favorite {
  width: 40px;
  height: 40px;
  background-color: var(--options-color);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
  transition: var(--speed);
  &:hover {
    background-color: var(--btn-active-bg-color);
  }
  &:hover .button-favorite__img {
    fill: var(--header-card-active-color);
  }
}
.button-favorite__img {
  width: 17px;
  height: 20px;
  fill: var(--btn-active-bg-color);
}
</style>
