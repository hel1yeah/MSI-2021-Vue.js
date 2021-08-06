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
  width: 640px;
  height: 840px;
  background-color: var(--bgc-title-color);
  border-radius: 20px;
}
.header-img {
  position: absolute;
  top: -55px;
  left: -76px;
}

@media screen and (max-width: 1370px) {
  .header-img__wrapper {
    overflow: hidden;
  }
}
@media screen and (max-width: 1150px) {
  .header-img__wrapper {
    width: 500px;
    height: 700px;
  }
}
@media screen and (max-width: 1150px) {
  .header-img__wrapper {
    width: 360px;
    height: 560px;
  }
}
@media screen and (max-width: 870px) {
  .header-img__wrapper {
    display: none;
  }
}
</style>
