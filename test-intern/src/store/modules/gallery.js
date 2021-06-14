import { getSearchDogs } from "@/api/gallery";

const state = {
  data: null,
  error: null,
  isLoading: false,
};

export const mutationsTypes = {
  searchImagesStart: "[Gallery] Search Images Start",
  searchImagesSuccess: "[Gallery] search Images Success",
  searchImagesFailure: "[Gallery] Search Images Failure",
};

const mutations = {
  [mutationsTypes.searchImagesStart](state) {
    state.data = null;
    state.error = null;
    state.isLoading = true;
  },
  [mutationsTypes.searchImagesSuccess](state, arrayFoundDogs) {
    state.data = arrayFoundDogs;
    state.error = null;
    state.isLoading = false;
  },
  [mutationsTypes.searchImagesFailure](state, err) {
    state.data = null;
    state.error = err;
    state.isLoading = false;
  },
};

export const actionsTypes = {
  getSearchDogs: "[Gallery] Search Image",
};

const actions = {
  [actionsTypes.getSearchDogs]({ commit }, breed) {
    return new Promise(() => {
      commit(mutationsTypes.searchImagesStart);
      getSearchDogs(breed)
        .then((res) => {
          commit(mutationsTypes.searchImagesSuccess, res.data);
        })
        .catch((err) => {
          commit(mutationsTypes.searchImagesFailure, err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
