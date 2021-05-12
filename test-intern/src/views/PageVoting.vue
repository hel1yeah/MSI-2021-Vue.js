<template>
  <section class="voting">
    <div class="search-attitude-wrapper">
      <router-link :to="{name : 'dogVote'}" class="voting__home">voting</router-link>
      <Attitude></Attitude>
    </div>
    <div class="action-wrapper">
      <transition name="appearance" mode="out-in">
        <!-- преключение между страницамис помощью роута -->

        <router-view>
        </router-view>
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
  width: 680px;
}

.voting__home {
  text-align: center;
  border-radius: 10px;
  background-color: var(--white-color);
  max-width: 146px;
  padding: 5px 30px;
  text-transform: uppercase;
  color: var(--pink-color);

  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  transition: var(--speed);
  &.router-link-exact-active{
    background-color: var(--pink-color);
      color: var(--white-color);
  }
}
.action-wrapper {
  background-color: var(--white-color);
  padding: 20px;
  border-radius: 20px;
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
  border: 4px solid var(--white-color);

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

  fill: var(--white-color);

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
  background-color: var(--pink-color);
  &:hover {
    background-color: #ffadb2;
    fill: var(--pink-color);
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
  background-color: var(--main-color);
  padding: 15px 20px 15px 15px;
  margin: 15px 0 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.action-user__time {
  background-color: var(--white-color);
  padding: 3px 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 5px;
}
.action-user__description {
  font-size: 16px;
  line-height: 24px;
  color: var(--gray-color);
  & span {
    color: var(--black-color);
    font-weight: 600;
  }
}
.action-user__attitude {
  width: 20px;
  height: 20px;
}
</style>
