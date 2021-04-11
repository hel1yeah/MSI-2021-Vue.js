<template>
  <router-link :to="{ name: 'home' }">
    <button class="button-close-component">
      <svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.70975 10.9901L9.30945 19.5896C9.85645 20.1369 10.7435 20.1369 11.2903 19.5896C11.8371 19.0427 11.8371 18.1558 11.2903 17.6091L3.6808 9.99988L11.29 2.39096C11.8369 1.84391 11.8369 0.957107 11.29 0.410284C10.7432 -0.136761 9.85625 -0.136761 9.30925 0.410284L0.70953 9.00985C0.43611 9.28339 0.299561 9.64153 0.299561 9.99983C0.299561 10.3583 0.43638 10.7167 0.70975 10.9901Z"
        />
      </svg></button
  ></router-link>
</template>

<script>
export default {
  name: "ButtonClose",
};
</script>

<style lang="scss">
.button-close-component {
  background-color: var(--hover-color);
  width: 40px;
  height: 40px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  border: transparent;
  outline: transparent;

  border-radius: 10px;

  fill: var(--pink-color);
  transition: 0.6s;
  &:hover {
    fill: var(--while-color);
    background-color: var(--pink-color);
  }
}
</style>
