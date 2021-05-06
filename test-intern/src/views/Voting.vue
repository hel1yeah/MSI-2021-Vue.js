<template>
  <section class="voting">
    <div class="search-attitude-wrapper">
      <Search></Search>
      <Attitude></Attitude>
    </div>
    <div class="action-wrapper">
      <div class="voting-top">
        <ButtonClose></ButtonClose>
        <NamePage :nameComponent="nameComponent"></NamePage>
      </div>
      <div class="voting__content">
        <div
          class="voting__content-img"
          :style="{ backgroundImage: `url(${dog.url})` }"
        ></div>
        <!-- <img
          class="voting__content-img"
          :src="dog.url"
          alt="dog"
        /> -->
        <div class="voting__content--attitude-wrapper">
          <div
            class="voting__content--attitude photo__attitude--likes"
            @click="voteLike"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
              />
            </svg>
          </div>
          <div class="voting__content--attitude photo__attitude--favourites">
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
              />
            </svg>
          </div>
          <div
            class="voting__content--attitude photo__attitude--dislikes"
            @click="voteUnLike"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="action-user" v-for="action in actions" :key="action.time">
        <div class="action-user__time">{{ action.time }}</div>
        <div class="action-user__description">
          Image ID: <span>{{ action.id }}</span> was added to
          {{ action.action }}
        </div>
        <div class="action-user__attitude">
          <img
            class="action-user__attitude"
            :src="getImg(action.action)"
            alt="dog"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

import { actionsTypes } from "@/store/modules/voting";

import Search from "@/components/Search.vue";
import Attitude from "@/components/Attitude.vue";
import ButtonClose from "@/components/ButtonClose.vue";
import NamePage from "@/components/NamePage.vue";

export default {
  name: "Voting",
  components: {
    Search,
    Attitude,
    ButtonClose,
    NamePage,
  },
  data() {
    return {
      nameComponent: "Voting",
      actions: [
        {
          time: "13:26",
          id: "dfhgfh3",
          action: "Likes",
        },
      ],
      likes: require("../assets/images/insignia/like.svg"),
      unLikes: require("../assets/images/insignia/like.svg"),
      favorite: require("../assets/images/insignia/like.svg"),
    };
  },
  methods: {
    getImage() {
      this.$store.dispatch(actionsTypes.getImage);
    },
    voteLike() {
      this.actions.push(this.creatActionItem("Likes"));
      this.$store.dispatch(actionsTypes.voteLike);
      this.$store.dispatch(actionsTypes.getImage);
    },
    voteUnLike() {
      this.actions.push(this.creatActionItem("Unlike"));
      this.$store.dispatch(actionsTypes.voteUnLike);
      this.$store.dispatch(actionsTypes.getImage);
    },
    getImg(action) {
      let act = action.toLowerCase();
      if (act === "like") {
        return this.likes;
      } else if (act === "unlike") {
        return this.likes;
      } else {
        return this.favorite;
      }
    },
    creatActionItem(act) {
      let id = this.dog.id;
      let actionItem = { time: this.getTime(), id, action: act };
      return actionItem;
    },
    getTime() {
      let data = new Date();
      let hours = data.getHours();
      let minutes = data.getMinutes();
      let time = `${hours}:${minutes}`;
      return time;
    },
  },
  computed: {
    ...mapState({
      dog: (state) => state.voting.data,
    }),
  },
  created() {
    this.getImage();
  },
};
</script>

<style lang="scss">
.voting {
  width: 680px;
}
// .search-attitude-wrapper {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin: 0 0 10px;
// }

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
