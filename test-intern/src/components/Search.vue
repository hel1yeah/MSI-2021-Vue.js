<template>
  <div class="voting__search-wrapper">
    <input
      v-model="search"
      type="text"
      class="voting__search--input"
      placeholder="Search name"
      @keyup.enter="searchBreeds"
    />
    <button class="voting__search--button" @click="searchBreeds">
      <div class="voting__search--icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z"
          />
        </svg>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      search: null,
    };
  },
  methods: {
    searchBreeds() {
      this.$emit("onSearchBreeds", this.search);
      this.search = null;
    },
  },
};
</script>

<style lang="scss">
.voting__search-wrapper {
  position: relative;
  width: 470px;
  background-color: var(--default-block-bg-color);
  border-radius: 20px;
  padding: 15px 10px 15px 20px;
}
.voting__search--input {
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  outline: transparent;
  border: transparent;
  background-color: var(--default-block-bg-color);
  color: var(--bold-text-color);
}
.voting__search--button {
  position: absolute;
  right: 20px;
  top: 11px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--search-button-color);
  outline: transparent;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.6s;
  fill: var(--btn-active-bg-color);
  &:hover {
    background-color: var(--btn-active-bg-color);
    fill: var(--default-block-bg-color);
  }
}
.voting__search--icon {
  width: 20px;
  height: 20px;
}
@media screen and (max-width: 1200px) {
  .voting__search-wrapper{
    width: 260px;
    padding: 15px 10px 15px 20px;
    margin: 0 5px 0 0;
  }
}
@media screen and (max-width: 1025px) {
  .voting__search-wrapper{
    width: 260px;
    padding: 8px 10px;
  }
  .voting__search--button {
    position: absolute;
    right: 10px;
    top: 8px;
    width: 30px;
    height: 30px;
    border-radius: 11px
  }
}
</style>
