<template>
  <section class="header-img__wrapper">
    <img
      class="header-img"
      src="./../assets/images/girl-and-pet.svg"
      alt="girl-and-pet"
    />
  </section>
</template>

<script>
export default {
  name: "HeaderRight",
};
</script>

<style lang="scss">
.header-img__wrapper {
  position: relative;
}
.header-img {
  position: absolute;
  top: -55px;
  left: -76px;
}
</style>
