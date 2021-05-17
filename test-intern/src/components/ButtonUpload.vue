<template>
  <button class="button-upload">
    <svg
      class="button-upload__img"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z"
      />
    </svg>

    <!-- <img class="button-upload__img" src="./../assets/images/upload.svg" alt="upload" /> -->
    <span class="button-upload__name">upload</span>
  </button>
</template>

<script>
export default {
  name: "ButtonUpload",
};
</script>

<style lang="scss">
.button-upload {
  background-color: var(--hover-color);
  width: 143px;
  padding: 12px 0;

  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--btn-active-bg-color);
  letter-spacing: 2px;
  font-weight: 500;
  fill: var(--btn-active-bg-color);
  transition: var(--speed);
  &:hover {
    background-color: var(--btn-active-bg-color);
    color: var(--block-bg-color);
    fill: var(--block-bg-color);
  }
}
.button-upload__img {
  margin: 0 10px 0 0;
}
.button-upload__name {
  font-size: 15px;
  line-height: 16px;
}
</style>
