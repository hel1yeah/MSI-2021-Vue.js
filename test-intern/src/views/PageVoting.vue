<template>
  <section class="voting">
    <div class="search-attitude-wrapper">
      <router-link :to="{ name: 'dogVote' }" class="voting__home"
        >voting</router-link
      >
      <Attitude></Attitude>
    </div>
    <div class="action-wrapper">
      <transition name="appearance" mode="out-in">
        <!-- преключение между страницами с помощью роута -->
        <router-view> </router-view>
      </transition>
    </div>
  </section>
</template>

<script>
import Attitude from "@/components/Attitude.vue";

export default {
  name: "PageVoting",
  components: {
    Attitude,
  },
};
</script>

<style lang="scss">
.voting {
}

.voting__home {
  text-align: center;
  border-radius: 10px;
  background-color: var(--btn-active-bg-color);
  max-width: 146px;
  padding: 5px 30px;
  text-transform: uppercase;
  color: var(--while-color);

  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  transition: var(--speed);
  &.router-link-exact-active {
    background-color: var(--btn-active-bg-color);
    color: var(--default-block-bg-color);
  }
}
.action-wrapper {
  background-color: var(--default-block-bg-color);
  padding: 20px;
  border-radius: 20px;
  width: 680px;
}
.voting-top {
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  & > a {
    margin: 0 10px 0 0;
  }
}

.voting__content {
}
.voting__content-img {
  width: 100%;
  height: 360px;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  z-index: 1;
}
.voting__content--attitude-wrapper {
  width: 250px;
  position: relative;
  z-index: 3;
  margin: -44px auto 0 auto;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  border: 4px solid var(--default-block-bg-color);

  display: flex;
  align-items: center;
  justify-content: center;
}
.voting__content--attitude {
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  width: 80px;
  height: 80px;

  fill: var(--default-block-bg-color);

  &:not(:last-child) {
    margin: 0 4px 0 0;
  }

  transition: 0.6s;
}

.photo__attitude--likes {
  background-color: var(--grean-card-color);
  &:hover {
    background-color: rgb(208, 250, 225);
    fill: #97eab9;
  }
}
.photo__attitude--favourites {
  background-color: var(--btn-active-bg-color);
  &:hover {
    background-color: #ffadb2;
    fill: var(--btn-active-bg-color);
  }
}
.photo__attitude--dislikes {
  background-color: var(--orange-card-color);
  &:hover {
    background-color: rgb(248, 223, 177);
    fill: #ffd280;
  }
}

.action-user {
  max-width: 100%;
  background-color: var(--action-user-bg-color);
  padding: 15px 20px 15px 15px;
  margin: 15px 0 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.action-user__time {
  text-align: center;
  background-color: var(--time-bg-color);
  color: var(--bold-text-color);
  width: 62px;
  padding: 3px 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
}
.action-user__description {
  font-size: 16px;
  line-height: 24px;
  color: var(--help-text-color);
  & span {
    color: var(--bold-text-color);
    font-weight: 600;
  }
}
.action-user__attitude {
  width: 20px;
  height: 20px;
}

@media screen and (max-width: 1190px) {
  .action-wrapper {
    width: 510px;
  }
}

@media screen and (max-width: 1025px) {
  .action-wrapper {
    width: 400px;
  }
  .voting__content-img {
    height: 270px;
  }
}
@media screen and (max-width: 1025px) {
  .action-wrapper {
    width: 370px;
  }
  .voting__content-img {
    height: 250px;
  }
}
@media screen and (max-width: 870px) {
  .action-wrapper {
    width: 680px;
  }
  .voting__content-img {
    height: 360px;
  }
}
@media screen and (max-width: 769px) {
  .action-wrapper {
    width: 350px;
  }
  .voting__content-img {
    height: 270px;
  }
}
</style>
