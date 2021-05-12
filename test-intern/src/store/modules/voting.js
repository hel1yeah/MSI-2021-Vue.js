import votingAPI from "@/api/voting";

const state = {
  data: null,
  isLoading: false,
  error: null,
  isVotes: null,
  isVotesLike: null,
  isVodesDislike: null,
  isVotesFavorite: null,
};

export const mutationsTypes = {
  getImageStart: "[Voting] get Image Start",
  getImageSuccess: "[Voting] get Image Success",
  getImageFailure: "[Voting] get Image Start",

  voteLikeStart: "[Voting] vote Like Start",
  voteDislikeStart: "[Voting] vote UnLike Start",
  voteFavoriteStart: "[Voting] vote UnLike Start",

  getVotesStart: "[Voting] get Votes All",
};

export const actionsTypes = {
  getImage: "[Voting] get Image",
  getVotes: "[Voting] get Votes",

  voteLike: "[Voting] vote Like",
  voteDislike: "[Voting] vote Dislike",
  voteFavouriteImage: "[Voting] vote Favourite Image",
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
  //voteDislike
  [mutationsTypes.voteDislikeStart](state) {},
  //voteFavouriteImage
  [mutationsTypes.voteFavouriteImageStart](state) {},
  //voteFavouriteImage
  [mutationsTypes.getVotesStart](state) {
    state.isVotes = null;
    state.isLoading = true;
    state.error = null;
  },
  [mutationsTypes.getVotesSuccess](state, payload) {
    state.isVotes = payload;
    state.isLoading = false;
  },
  [mutationsTypes.getVotesFailure](state, payload) {
    state.isVotes = null;
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
          commit(mutationsTypes.getImageSuccess, response.data[0]);
        })
        .catch((err) => {
          commit(mutationsTypes.getImageFailure, err);
        });
    });
  },

  [actionsTypes.voteLike]({ commit, state }) {
    return new Promise((resolve) => {
      votingAPI
        .voteLike(state.data.id)
        .then((response) => {
          console.log("Like");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  [actionsTypes.voteDislike]({ commit, state }) {
    return new Promise((resolve) => {
      votingAPI
        .voteDislike(state.data.id)
        .then((response) => {
          console.log("Dislike");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  [actionsTypes.voteFavouriteImage]({state}) {
    return new Promise((resolve) => {
      votingAPI
        .voteFavouriteImage(state.data.id)
        .then((response) => {
          console.log("Favourite");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  [actionsTypes.getVotes]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationsTypes.getVotesStart);
      votingAPI
        .getVotes()
        .then((response) => {
          console.log(response.data);
          commit(mutationsTypes.getVotesSuccess, response.data);
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
