import breedsAPI from "@/api/breeds";

const state = {
  isLoading: false,
  isBreeds: null,
  isNames: null,
  isBreedsForName: null,
};

const mutations = {
  isLoadingStart(state) {
    state.isLoading = true;
    state.isBreeds = null;
  },
  isLoadingFinishBreeds(state, payload) {
    state.isLoading = false;
    state.isBreeds = payload;
  },
  isLoadingFinishNames(state, payload) {
    state.isNames = payload;
  },
  isLoadingFinishBreedsName(state, payload) {
    state.isLoading = false;
    state.isBreeds = payload;
  },
};

const actions = {
  getBreeds({ commit }, { limit, name }) {
    commit("isLoadingStart");
    return new Promise((resolve) => {
      breedsAPI.getBreeds(limit, name).then((response) => {
        commit("isLoadingFinishBreeds", response.data);
      });
    });
  },

  getBreedsNames({ commit }) {
    commit("isLoadingStart");
    return new Promise((resolve) => {
      breedsAPI.getBreedsNames().then((response) => {
        let names = [];
        response.data.forEach((dog) => {
          names.push(dog.name);
        });
        commit("isLoadingFinishNames", names);
      });
    });
  },

  getBreedsForName({ commit }, { name }) {
    commit("isLoadingStart");
    return new Promise((resolve) => {
      breedsAPI.getBreedsForName(name).then((response) => {
        console.log(response.data);
        commit("isLoadingFinishBreeds", response.data);
      });
    });
  },

  getNameDog({ commit }, { name }) {
    return new Promise((resolve) => {
      breedsAPI.getNameDog().then((response) => {
        let breads = response.data.filter((dog) => dog.name === name);

        commit("isLoadingFinishBreeds", breads);
      });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
