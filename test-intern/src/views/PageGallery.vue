<template>
  <section class="gallery">
    <div class="search-attitude-wrapper">
      <Search />
      <Attitude />
    </div>
    <Preloader v-if="loading"></Preloader>
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
            <select class="gallery-select">
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
            <select class="gallery-select">
              <option class="gallery-select__option" value="all">All</option>
              <option class="gallery-select__option" value="static">
                Static
              </option>
              <option class="gallery-select__option" value="Animated">
                Animated
              </option>
            </select>
          </div>
        </div>
        <div class="gallery-content__filters--item">
          <div class="gallery-content__filters--inner">
            <label class="gallery-label">Breed</label>
            <select class="gallery-select">
              <option class="gallery-select__option" value="All Breeds">
                None
              </option>
            </select>
          </div>
        </div>
        <div class="gallery-content__filters--item">
          <div class="gallery-content__filters--inner">
            <label class="gallery-label">limit</label>
            <select class="gallery-select">
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
          <button class="btn-update-arrow">
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
    </div>
  </section>
</template>

<script>
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
    };
  },
  computed: {
    loading() {
      return this.$store.state.gallery.isLoading;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  width: 680px;
}
.gallery-content {
  background-color: var(--block-bg-color);
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
  color: var(--gray-color);
  letter-spacing: 1px;
}
.gallery-select {
  width: 100%;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  color: var(--bold-text-color);
  background: var(--block-bg-color);
  outline: transparent;
  border: transparent;
  cursor: pointer;
}
.gallery-select__option {
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
.btn-update-arrow {
  width: 46px;
  height: 40px;

  background: var(--block-bg-color);
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
    fill: var(--block-bg-color);
  }
}
.btn-update-arrow__img {
  transition: var(--speed);
  width: 18px;
  height: 20px;
  fill: var(--btn-active-bg-color);
}
</style>
