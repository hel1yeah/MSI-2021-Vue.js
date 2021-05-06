<template>
  <section class="header">
    <router-link :to="{ name: 'home' }">
      <img class="header__logo" src="./../assets/Logo.svg" alt="PetsPaw" />
    </router-link>

    <div class="header__info">
      <h1 class="header__info--title">Hi intern!</h1>
      <p class="header__info--descr">Welcome to MSI 2021 Front-end test</p>
    </div>
    <div class="header__api">
      <p class="header__api--title">Lets start using The Dogs API</p>

      <div class="header__cards-wrapper">
        <div class="header__card">
          <div
            class="header__card--bg fiolet"
            :class="{ active: this.$route.path == '/voting' }"
          >
            <img
              class="header__card--img"
              src="../assets/images/vote-table.svg"
              alt="vote table"
            />
          </div>
          <router-link :to="{ name: 'voting' }">
            <button class="header__card--title">voting</button>
          </router-link>
        </div>
        <div class="header__card">
          <div
            class="header__card--bg grean"
            :class="{ active: this.$route.path == '/breeds' }"
          >
            <img
              class="header__card--img pet-breeds"
              src="../assets/images/pet-breeds.svg"
              alt="vote table"
            />
          </div>
          <router-link :to="{ name: 'breeds' }">
            <button class="header__card--title">breeds</button>
          </router-link>
        </div>
        <div class="header__card">
          <div
            class="header__card--bg orange"
            :class="{ active: this.$route.path == '/gallery' }"
          >
            <img
              class="header__card--img images-search"
              src="../assets/images/images-search.svg"
              alt="vote table"
            />
          </div>
          <router-link :to="{ name: 'gallery' }">
            <button class="header__card--title">gallery</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HiPage",
  data() {
    return {
      routeName: null,
    };
  },
};
</script>

<style lang="scss">
// .header {
// }
.header__logo {
  margin: 0 0 80px;
}
// .header__info {
// }
.header__info--title {
  font-weight: 500;
  font-size: 44px;
  line-height: 58px;
  color: var(--black-color);
}
.header__info--descr {
  color: var(--gray-color);
  font-size: 20px;
  line-height: 29px;
  margin: 0 0 60px;
}
// .header__api {
// }
.header__api--title {
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
}
.header__cards-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 450px;
}
.header__card {
  text-align: center;
  width: 138px;
  transition: all 0.6s;
  &:hover .header__card--title {
    background-color: var(--hover-color);
    color: var(--pink-color);
  }
  &:hover .header__card--bg {
    border: 4px solid var(--white-color);
  }
}
.header__card--bg {
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
    &.active {
      border: 4px solid var(--pink-color);
    }
  }

  &.grean {
    background-color: var(--grean-card-color);
    border: 4px solid rgba(204, 249, 222, 0.9);
    &.active {
      border: 4px solid var(--pink-color);
    }
  }

  &.orange {
    background-color: var(--orange-card-color);
    border: 4px solid rgba(255, 230, 182, 1);
    &.active {
      border: 4px solid var(--pink-color);
    }
  }
}
.header__card--img {
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
.header__card--title {
  text-transform: uppercase;
  color: var(--pink-color);
  background: var(--white-color);
  border-radius: 10px;
  width: 100%;
  padding: 10px 0;
  transition: all 0.6s;
  cursor: pointer;
  border-color: transparent;
  &:active,
  &:focus {
    border-color: transparent;
    outline: transparent;
  }
}
.router-link-exact-active > .header__card--title {
  background-color: var(--pink-color);
  color: var(--white-color);
}
.router-link-exact-active > .header__card--title .header__card--bg {
  background-color: var(--pink-color);
  color: var(--white-color);
}
// hover
</style>
