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
          <label class="gallery-label" for="order">order</label>
          <select class="gallery-select" name="order" id="order">
            <option class="gallery-select__option" value="">Affenpinscher</option>
            <option class="gallery-select__option" value="">Afghan Hound</option>
            <option class="gallery-select__option" value="">African Hunting Dog</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Search from "@/components/Search.vue";
import Attitude from "@/components/Attitude.vue";
import ButtonClose from "@/components/ButtonClose.vue";
import NamePage from "@/components/NamePage.vue";
import ButtonUpload from "@/components/ButtonUpload.vue";
export default {
  name: "Gallery",
  components: {
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
};
</script>

<style lang="scss">
.gallery{
  width: 680px;
}
.gallery-content {
  background-color: var(--while-color);
  border-radius: 20px;
  padding: 20px;
}
.gallery-content__title { 
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.gallery-content__title--item {
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
}
.gallery-content__filters{
  background-color: var(--options-color);
  border-radius: 20px;
  padding: 10px 20px 20px;
}
.gallery-content__filters--item{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.gallery-select {
  width: 226px;
  padding: 10px 0 10px 10px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 10px;
  color: var(--black-color);
  background: var(--while-color);
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
</style>
