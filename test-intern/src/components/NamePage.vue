<template>

    <div class="voting-tag">{{nameComponent}}</div>

</template>

<script>
export default {
  name: "NamePage",
  props: {
    nameComponent: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.voting-tag {
  text-align: center;
  border-radius: 10px;
  background-color: var(--btn-active-bg-color);
  max-width: 146px;
  padding: 5px 30px;
  text-transform: uppercase;
  color: var(--block-bg-color);
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
}
</style>
