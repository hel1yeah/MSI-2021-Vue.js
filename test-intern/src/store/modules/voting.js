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
  voteLikeStart: "[Voting] vote Like Start",
};

export const actionsTypes = {
  getImage: "[Voting] get Image",
  voteLike: "[Voting] vote Like",
};

const mutations = {
  // getImage
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
  // voteLike
  [mutationsTypes.voteLikeStart](state) {},
};

const actions = {
  [actionsTypes.getImage]({ commit }) {
    commit(mutationsTypes.getImageStart);
    return new Promise((resolve) => {
      votingAPI
        .getImage()
        .then((response) => {
          commit(mutationsTypes.getImageSuccess, response.data[0]);
        })
        .catch((err) => {
          commit(mutationsTypes.getImageFailure, err);
        });
    });
  },
  [actionsTypes.voteLike]({ context, state }, body) {
    return new Promise((resolve) => {
      votingAPI
        .voteLike(state.data.id)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log("catch :", err);
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
