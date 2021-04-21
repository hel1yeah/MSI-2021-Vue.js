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
    state.isBreedsForName = payload;
  },
};

const actions = {
  getBreeds({ commit }, { limit }) {
    commit("isLoadingStart");
    return new Promise((resolve) => {
      breedsAPI.getBreeds(limit).then((response) => {
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
        console.log(names);
        commit("isLoadingFinishNames", names);
      });
    });
  },

  getBreedsForName({ commit }, { name }) {
    commit("isLoadingStart");
    return new Promise((resolve) => {
      breedsAPI.getBreedsForName(name).then((response) => {
        console.log(response.data);
        commit("isLoadingFinishBreedsName", response.data);
      });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
