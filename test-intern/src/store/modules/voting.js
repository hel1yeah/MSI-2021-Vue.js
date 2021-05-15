import votingAPI from "@/api/voting";
import calculateDislikesLikes from "@/helpers/calculateDislikesLikes";

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
  voteLikeStart: "[Voting] vote Like Start",
  voteDislikeStart: "[Voting] vote UnLike Start",
  voteFavoriteStart: "[Voting] vote UnLike Start",

  getImageStart: "[Voting] get Image Start",
  getImageSuccess: "[Voting] get Image Success",
  getImageFailure: "[Voting] get Image Start",

  getVotesStart: "[Voting] get Votes All",
  getVotesSuccess: "[Voting] get Votes Success",
  getVotesFailure: "[Voting] get Votes Failure",

  getVotesFavoriteStart: "[Voting] get Votes Favorite Start",
  getVotesFavoriteSuccess: "[Voting] get Votes Favorite Success",
  getVotesFavoriteFailure: "[Voting] get Votes Favorite Failure",
};

export const actionsTypes = {
  voteLike: "[Voting] vote Like",
  voteDislike: "[Voting] vote Dislike",
  voteFavouriteImage: "[Voting] vote Favourite Image",

  getImage: "[Voting] get Image",
  getVotes: "[Voting] get Votes",
  getVotesFavorite: "[Voting] get Votes Favorite",
};

const mutations = {
  // votes 
  [mutationsTypes.voteLikeStart](state) {},
  [mutationsTypes.voteDislikeStart](state) {},
  [mutationsTypes.voteFavouriteImageStart](state) {},

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

  // get Votes All 
  [mutationsTypes.getVotesStart](state) {
    state.isVotes = null;
    state.isLoading = true;
    state.error = null;
  },
  [mutationsTypes.getVotesSuccess](state, payload) {
    state.isVotes = payload.res;
    state.isLoading = false;
    state.isVotesLike = payload.like;
    state.isVotesDislike = payload.dislike;
  },
  [mutationsTypes.getVotesFailure](state, payload) {
    state.isVotes = null;
    state.isLoading = false;
    state.error = payload;
  },
  // get Votes Favorite 
  [mutationsTypes.getVotesFavoriteStart](state) {
    state.isVotesFavorite = null;
    state.isLoading = true;
    state.error = null;
  },
  [mutationsTypes.getVotesFavoriteSuccess](state, payload) {
    state.isLoading = false;
    state.isVotesFavorite = payload;
  },
  [mutationsTypes.getVotesFavoriteFailure](state, payload) {
    state.isVotesFavorite = null;
    state.isLoading = false;
    state.error = payload;
  },
};

const actions = {
  [actionsTypes.voteFavouriteImage]({ state }) {
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
  [actionsTypes.voteLike]({ state }) {
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
  [actionsTypes.voteDislike]({ state }) {
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
  [actionsTypes.getVotes]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationsTypes.getVotesStart);
      votingAPI
        .getVotes()
        .then((response) => {
          calculateDislikesLikes.calculate(response.data);
          commit(mutationsTypes.getVotesSuccess, {
            res: response.data,
            like: calculateDislikesLikes.like,
            dislike: calculateDislikesLikes.disLike,
          });
        })
        .catch((err) => {
          commit(mutationsTypes.getVotesFailure, err);
        });
    });
  },
  [actionsTypes.getVotesFavorite]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationsTypes.getVotesFavoriteStart)
      votingAPI
        .getVotesFavourite()
        .then((response) => {
          commit(mutationsTypes.getVotesFavoriteSuccess, response.data)
          console.log("Favourite");
        })
        .catch((err) => {
          commit(mutationsTypes.getVotesFavoriteFailure, response.data)
        });
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
