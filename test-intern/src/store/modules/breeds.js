import breedsAPI from "@/api/breeds";

const state = {
  isLoading: false,
  isBreeds: null,
};

const mutations = {
  isLoadingStart(state) {
    state.isLoading = true;
  },
  isLoadingFinish(state, payload) {
    state.isLoading = false;
    state.isBreeds = payload;
  },
};

const actions = {
  getBreeds({ commit }) {
    return new Promise((resolve) => {
      breedsAPI.getBreeds().then((response) => {
        commit("isLoadingFinish", response.data);
      });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};