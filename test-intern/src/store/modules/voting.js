import votingAPI from "@/api/voting";

const state = {
  data: null,
  isLoading: false,
  error: null,
};

export const mutationsTypes = {
  getImageStart: "[Voting] get Image Start",
  getImageSuccess: "[Voting] get Image Success",
  getImageFailure: "[Voting] get Image Start",
};

export const actionsTypes = {
  getImage: "[Voting] get Image",
};

const mutations = {
  [mutationsTypes.getImageStart](state) {
    state.data = null;
    state.isLoading = true;
    state.error = null;
  },
  [mutationsTypes.getImageSuccess](state, payload) {
    state.data = payload;
    state.isLoading = false;
    state.error = null;
  },
  [mutationsTypes.getImageFailure](state, payload) {
    state.data = null;
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionsTypes.getImage]({ commit }) {
    commit(mutationsTypes.getImageStart);
    return new Promise((resolve) => {
      votingAPI
        .getImage()
        .then((response) => {
          commit(mutationsTypes.getImageSuccess, response.data);
        })
        .catch((err) => {
          commit(mutationsTypes.getImageFailure, err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
