<template>
  <section class="header">
    <img class="header_logo" src="./../assets/Logo.svg" alt="PetsPaw" />
    <div class="header_info">
      <h1 class="header_info--title">Hi intern!</h1>
      <p class="header_info--descr">Welcome to MSI 2021 Front-end test</p>
    </div>
    <div class="header_api">
      <p class="header_api--title">Lets start using The Dogs API</p>

      <div class="header_cards-wrapper">
        <div class="header_card">
          <div class="header_card--bg fiolet">
            <img
              class="header_card--img"
              src="../assets/images/vote-table.svg"
              alt="vote table"
            />
          </div>
          <p class="header_card--title">voting</p>
        </div>
        <div class="header_card">
          <div class="header_card--bg grean">
            <img
              class="header_card--img pet-breeds"
              src="../assets/images/pet-breeds.svg"
              alt="vote table"
            />
          </div>
          <p class="header_card--title">breeds</p>
        </div>
        <div class="header_card">
          <div class="header_card--bg orange">
            <img
              class="header_card--img images-search"
              src="../assets/images/images-search.svg"
              alt="vote table"
            />
          </div>
          <p class="header_card--title">gallery</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HiPage",
};
</script>

<style lang="scss">
.header {
}
.header_logo {
  margin: 0 0 80px;
}
.header_info {
}
.header_info--title {
  font-weight: 500;
  font-size: 44px;
  line-height: 58px;
  color: var(--black-color);
}
.header_info--descr {
  color: var(--gray-color);
  font-size: 20px;
  line-height: 29px;
  margin: 0 0 60px;
}
.header_api {
}
.header_api--title {
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
}
.header_cards-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 450px;
}
.header_card {
  text-align: center;
  width: 138px;
  transition: all 0.6s;
  &:hover .header_card--title {
    background-color: var(--hover-color);
  }
  &:hover .header_card--bg {
    border: 4px solid var(--while-color);
  }
}
.header_card--bg {
  display: block;

  box-sizing: border-box;
  border-radius: 20px;
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px;
transition: all 0.6s;
  &.fiolet {
    background-color: var(--fiolet-card-color);
    border: 4px solid rgba(226, 227, 251, 0.7);
  }

  &.grean {
    background-color: var(--grean-card-color);
    border: 4px solid rgba(204, 249, 222, 0.9);
  }

  &.orange {
    background-color: var(--orange-card-color);
    border: 4px solid rgba(255, 230, 182, 1);
  }
}
.header_card--img {
  width: 100px;
  height: 124px;
  &.pet-breeds {
    width: 117px;
    height: 163px;
  }
  &.images-search {
    width: 112px;
    height: 193px;
  }
}
.header_card--title {
  text-transform: uppercase;
  color: var(--pink-color);
  background: var(--while-color);
  border-radius: 10px;
  padding: 10px 0;
  transition: all 0.6s;
}

// hover
</style>
