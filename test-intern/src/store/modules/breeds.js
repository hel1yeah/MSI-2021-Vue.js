import breedsAPI from "@/api/breeds";

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
};

export const actionsTypes = {
  getBreeds: "[Breeds] Get Breeds",
  getBreedsLimit: "[Breeds] Get Breeds Limit",
  getForNameBreeds: "[Breeds] Get For Name Breeds",
};

const mutations = {
  [mutationsTypes.getBreedsStart](state) {
    (state.isLoading = true), (state.data = null);
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
};

const actions = {
  [actionsTypes.getBreeds]({ commit }) {
    commit(mutationsTypes.getBreedsStart);
    return new Promise((resolve) => {
      breedsAPI
        .getBreeds()
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
      breedsAPI
        .getBreedsLimit(limit)
        .then((response) => {
          commit(mutationsTypes.getBreedsSuccess, response.data);
        })
        .catch((err) => {
          // console.error(err);
          commit(mutationsTypes.getBreedsFailure, err);
        });
    });
  },
  [actionsTypes.getForNameBreeds](context, { name }) {
    context.commit(mutationsTypes.getBreedsStart);
    return new Promise((resolve) => {
      breedsAPI
        .getBreeds()
        .then((response) => {
          context.commit(
            mutationsTypes.getBreedsSuccess,
            getForNameBreeds(response.data, name)
          );
        })
        .catch((err) => {
          context.commit(mutationsTypes.getBreedsFailure, err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
