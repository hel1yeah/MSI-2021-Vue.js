import { getSearchDogs } from "@/api/gallery";

const state = {
  data: null,
  error: null,
  isLoading: false,
};

export const mutationsTypes = {
  searchImagesStart: "[Gallery] Search Images Start",
  searchImagesSuccess: "[Gallery] Search Images Start",
  searchImagesFailure: "[Gallery] Search Images Start",
};

const mutations = {
  [mutationsTypes.searchImagesStart](state) {
    state.data = null;
    state.error = null;
    state.isLoading = true;
  },
  [mutationsTypes.searchImagesSuccess](state, payload) {
    state.data = payload;
    state.error = null;
    state.isLoading = false;
  },
  [mutationsTypes.searchImagesFailure](state, payload) {
    state.data = null;
    state.error = payload;
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
        .then((response) => {
          console.log(`query ${breed.breed_id} `, response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
