<template>
  <section class="header">
    <img class="header__logo" src="./../assets/Logo.svg" alt="PetsPaw" />
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
            :class="{ active: isActive.voting }"
          >
            <img
              class="header__card--img"
              src="../assets/images/vote-table.svg"
              alt="vote table"
            />
          </div>
          <button
            @click="activePage"
            class="header__card--title voting"
            :class="{ 'voting-active': isActive.voting }"
          >
            voting
          </button>
        </div>
        <div class="header__card">
          <div
            class="header__card--bg grean"
            :class="{ active: isActive.breeds }"
          >
            <img
              class="header__card--img pet-breeds"
              src="../assets/images/pet-breeds.svg"
              alt="vote table"
            />
          </div>
          <button
            class="header__card--title breeds"
            :class="{ 'breeds-active': isActive.breeds }"
            @click="activePage"
          >
            breeds
          </button>
        </div>
        <div class="header__card gallery" @click="activePage">
          <div
            class="header__card--bg orange"
            :class="{ active: isActive.gallery }"
          >
            <img
              class="header__card--img images-search"
              src="../assets/images/images-search.svg"
              alt="vote table"
            />
          </div>
          <button
            class="header__card--title gallery"
            :class="{ 'gallery-active': isActive.gallery }"
          >
            gallery
          </button>
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
      isActive: {
        headerRight: true,
        voting: false,
        breeds: false,
        gallery: false,
      },
    };
  },
  methods: {
    activePage(e) {
      if (e.target.classList.contains("voting")) {
        (this.isActive.headerRight = false), (this.isActive.voting = true);
        this.isActive.breeds = false;
        this.isActive.gallery = false;
      } else if (e.target.classList.contains("breeds")) {
        (this.isActive.headerRight = false), (this.isActive.voting = false);
        this.isActive.breeds = true;
        this.isActive.gallery = false;
      } else if (e.target.classList.contains("gallery")) {
        (this.isActive.headerRight = false), (this.isActive.voting = false);
        this.isActive.breeds = false;
        this.isActive.gallery = true;
      }
      this.$emit("isActive", this.isActive);
    },
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
    border: 4px solid var(--while-color);
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
  background: var(--while-color);
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
.gallery-active,
.voting-active,
.breeds-active {
  background-color: var(--pink-color);
  color: var(--while-color);
}
// hover
</style>
