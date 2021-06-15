import { getSearchDogs, voteFavouriteImage } from "@/api/gallery";

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
  voteFavouriteImage: "[Gallery] vote Favourite Image",
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
  [actionsTypes.voteFavouriteImage]({ state }, id) {
    return new Promise((reject) => {
      voteFavouriteImage(id)
        .then((res) => {
          console.log("picture added to favourite : ", res.statusText);
        })
        .catch((err) => {
          console.log("picture added to favourite : ", err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
