import { getBreeds, getBreedsLimit } from "@/api/breeds";

import { dogNames, getForNameBreeds } from "@/helpers/getBreedsName";

const state = {
  data: null,
  isLoading: false,
  error: null,
  breeds: null,
};

export const mutationsTypes = {
  getBreedsStart: "[Breeds] get Breeds Start",
  getBreedsSuccess: "[Breeds] get Breeds Success",
  getBreedsNameSuccess: "[Breeds] get Breeds Name Success",
  getBreedsFailure: "[Breeds] get Breeds Failure",
  sortStart: "[Breeds] Sort Start",
  sortFinish: "[Breeds] Sort Finish",
  onSearchBreedsStart: "[Breeds] on Search Breeds Start",
  onSearchBreedsSuccess: "[Breeds] on Search Breeds Success",
  onSearchBreedsFailure: "[Breeds] on Search Breeds Failure",
};

export const actionsTypes = {
  getBreeds: "[Breeds] Get Breeds",
  getBreedsLimit: "[Breeds] Get Breeds Limit",
  getForNameBreeds: "[Breeds] Get For Name Breeds",
  sortForName: "[Breeds] sort For Name",
  onSearchBreeds: "[Breeds] on Search Breeds For Name",
};

const mutations = {
  [mutationsTypes.getBreedsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationsTypes.getBreedsSuccess](state, payload) {
    (state.isLoading = false), (state.data = payload);
  },

  [mutationsTypes.getBreedsNameSuccess](state, payload) {
    state.breeds = payload;
  },
  [mutationsTypes.getBreedsFailure](state, payload) {
    (state.isLoading = false), (state.data = payload);
  },

  [mutationsTypes.sortStart](state) {
    state.isLoading = true;
  },
  [mutationsTypes.sortFinish](state, payload) {
    (state.isLoading = false), (state.data = payload);
  },

  [mutationsTypes.onSearchBreedsStart](state) {
    (state.isLoading = true), (state.data = null);
  },
  [mutationsTypes.onSearchBreedsSuccess](state, payload) {
    (state.isLoading = false), (state.data = payload);
  },
  [mutationsTypes.onSearchBreedsFailure](state, payload) {
    (state.isLoading = false), (state.data = payload);
  },
};

const actions = {
  [actionsTypes.getBreeds]({ commit }) {
    commit(mutationsTypes.getBreedsStart);
    return new Promise((resolve) => {
      getBreeds()
        .then((response) => {
          const names = dogNames(response.data);
          commit(mutationsTypes.getBreedsNameSuccess, names);
          commit(mutationsTypes.getBreedsSuccess, response.data);
        })
        .catch((err) => {
          // console.error(err);
          commit(mutationsTypes.getBreedsFailure, err);
        });
    });
  },
  [actionsTypes.getBreedsLimit]({ commit }, { limit }) {
    commit(mutationsTypes.getBreedsStart);
    return new Promise((resolve) => {
      getBreedsLimit(limit)
        .then((response) => {
          commit(mutationsTypes.getBreedsSuccess, response.data);
        })
        .catch((err) => {
          // console.error(err);
          commit(mutationsTypes.getBreedsFailure, err);
        });
    });
  },
  [actionsTypes.getForNameBreeds]({ commit }, { name }) {
    commit(mutationsTypes.getBreedsStart);
    return new Promise((resolve) => {
      getBreeds()
        .then((response) => {
          if (name === "All Breeds") {
            commit(mutationsTypes.getBreedsSuccess, response.data);
          } else {
            commit(
              mutationsTypes.getBreedsSuccess,
              getForNameBreeds(response.data, name)
            );
          }
        })
        .catch((err) => {
          commit(mutationsTypes.getBreedsFailure, err);
        });
    });
  },
  [actionsTypes.sortForName](context, { sortingType }) {
    context.commit(mutationsTypes.sortStart);
    let sortArr = context.state.data;
    if (sortingType === "asc") {
      sortArr.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortingType === "desc") {
      sortArr.sort((a, b) => {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
    context.commit(mutationsTypes.sortFinish, sortArr);
  },
  [actionsTypes.onSearchBreeds]({ commit }, name) {
    commit(mutationsTypes.onSearchBreedsStart);
    return new Promise((resolve) => {
      getBreeds()
        .then((response) => {
          commit(
            mutationsTypes.onSearchBreedsSuccess,
            getForNameBreeds(response.data, name)
          );
        })
        .catch((err) => {
          commit(mutationsTypes.onSearchBreedsFailure, payload);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
