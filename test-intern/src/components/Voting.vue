<template>
  <section class="voting-component">
    <div class="voting__search-attitude-wrapper">
      <div class="voting__search-wrapper">
        <input
          type="text"
          class="voting__search--input"
          placeholder="Search for breeds by name"
        />
        <button class="voting__search--button">
          <div class="voting__search--icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.361 18.2168L14.601 13.2662C15.8249 11.8113 16.4954 9.98069 16.4954 8.07499C16.4954 3.62251 12.8729 0 8.42045 0C3.96797 0 0.345459 3.62251 0.345459 8.07499C0.345459 12.5275 3.96797 16.15 8.42045 16.15C10.092 16.15 11.6849 15.6458 13.0467 14.6888L17.8429 19.677C18.0434 19.8852 18.313 20 18.602 20C18.8755 20 19.1349 19.8957 19.3319 19.7061C19.7504 19.3034 19.7637 18.6357 19.361 18.2168ZM8.42045 2.10652C11.7115 2.10652 14.3889 4.78391 14.3889 8.07499C14.3889 11.3661 11.7115 14.0435 8.42045 14.0435C5.12937 14.0435 2.45198 11.3661 2.45198 8.07499C2.45198 4.78391 5.12937 2.10652 8.42045 2.10652Z"
              />
            </svg>
          </div>
        </button>
      </div>
      <div class="attitude">
        <div class="attitude__item attitude__like">
          <div class="attitude__img attitude__like--img">
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
        </div>
        <div class="attitude__item attitude__favourites">
          <div class="attitude__img attitude__favourites--img">
            <svg viewBox="0 0 30 26" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.07107 2C4.71811 2 2 4.71811 2 8.07107C2 9.68122 2.63963 11.2254 3.77817 12.364L15 23.5858L26.2218 12.364C27.3604 11.2254 28 9.68121 28 8.07107C28 4.71811 25.2819 2 21.9289 2C20.3188 2 18.7746 2.63963 17.636 3.77817L15.7071 5.70711C15.3166 6.09763 14.6834 6.09763 14.2929 5.70711L12.364 3.77818C11.2254 2.63963 9.68121 2 8.07107 2ZM0 8.07107C0 3.61354 3.61354 0 8.07107 0C10.2116 0 12.2646 0.850343 13.7782 2.36396L15 3.58579L16.2218 2.36396C17.7354 0.850341 19.7884 0 21.9289 0C26.3865 0 30 3.61354 30 8.07107C30 10.2116 29.1497 12.2646 27.636 13.7782L15.7071 25.7071C15.3166 26.0976 14.6834 26.0976 14.2929 25.7071L2.36396 13.7782C0.850339 12.2646 0 10.2116 0 8.07107Z"
              />
            </svg>
          </div>
        </div>
        <div class="attitude__item attitude__dislikes">
          <div class="attitude__img attitude__dislikes--img">
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
    </div>
    <div class="actions-wrapper">
      <div class="actions__user">
        <button class="actions__button-back">
          <svg
            width="12"
            height="20"
            viewBox="0 0 12 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.70975 10.9901L9.30945 19.5896C9.85645 20.1369 10.7435 20.1369 11.2903 19.5896C11.8371 19.0427 11.8371 18.1558 11.2903 17.6091L3.6808 9.99988L11.29 2.39096C11.8369 1.84391 11.8369 0.957107 11.29 0.410284C10.7432 -0.136761 9.85625 -0.136761 9.30925 0.410284L0.70953 9.00985C0.43611 9.28339 0.299561 9.64153 0.299561 9.99983C0.299561 10.3583 0.43638 10.7167 0.70975 10.9901Z"
            />
          </svg>
        </button>
        <div class="voting-tag">voting</div>
      </div>
      <div class="voting__content">
        <img
          class="voting__content-img"
          src="./../assets/images/dog-test.jpg"
          alt="dog"
        />
        <div class="voting__content--attitude-wrapper">
          <div class="voting__content--attitude actions__attitude--likes">
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
          <div class="voting__content--attitude actions__attitude--favourites">
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
          <div class="voting__content--attitude actions__attitude--dislikes">
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Voting",
};
</script>

<style lang="scss">
.voting-component {
  width: 680px;
}
.voting__search-attitude-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 10px;
}
.voting__search-wrapper {
  position: relative;
  width: 470px;
  background-color: var(--while-color);
  border-radius: 20px;
  padding: 15px 10px 15px 20px;
}
.voting__search--input {
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  outline: transparent;
  border: transparent;
}
.voting__search--button {
  position: absolute;
  right: 20px;
  top: 11px;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: var(--hover-color);
  outline: transparent;
  border: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.6s;
  fill: var(--pink-color);
  &:hover {
    background-color: var(--pink-color);
    fill: var(--while-color);
  }
}
.voting__search--icon {
  width: 20px;
  height: 20px;
}
.attitude {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.attitude__item {
  width: 60px;
  height: 60px;
  background-color: var(--while-color);
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  fill: var(--pink-color);
  transition: 0.6s;

  &:hover {
    fill: var(--while-color);
    background-color: var(--pink-color);
  }
}
.attitude__img {
  width: 30px;
  height: 30px;
}
.attitude__like {
}
.attitude__like--img {
}
.attitude__favourites {
}
.attitude__favourites--img {
}
.attitude__dislikes {
}
.attitude__dislikes--img {
}
.actions-wrapper {
  background-color: var(--while-color);
  padding: 20px;
  border-radius: 20px;
}
.actions__user {
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
}
.actions__button-back {
  background-color: var(--hover-color);
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
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
.voting-tag {
  text-align: center;
  border-radius: 10px;
  background-color: var(--pink-color);
  max-width: 146px;
  padding: 5px 30px;
  text-transform: uppercase;
  color: var(--while-color);
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

.voting__content {

}
.voting__content-img {
  border-radius: 20px;
  z-index: 1;
}
.voting__content--attitude-wrapper {
  width: 250px;
  position: relative;
  z-index: 3;
  margin: -44px auto 0 auto ;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  border: 4px solid var(--while-color);

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


  fill: var(--while-color);

  &:not(:last-child){
      margin: 0 4px 0 0;
  }

  transition: .6s;

}

.actions__attitude--likes {
  background-color: var(--grean-card-color);
    &:hover{
    background-color: rgb(208, 250, 225);
    fill: #97EAB9;
  }
}
.actions__attitude--favourites {
  background-color: var(--pink-color);
    &:hover{
    background-color: #ffadb2;
    fill: var(--pink-color);
  }
}
.actions__attitude--dislikes {
  background-color: var(--orange-card-color);
    &:hover{
    background-color: rgb(248, 223, 177);
    fill: #FFD280;
    
  }
}
</style>
