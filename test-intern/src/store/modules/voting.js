import {
  voteLike,
  voteDislike,
  voteFavouriteImage,
  getSearchImage,
  getVotes,
  getVotesFavourite,
  getSearchDogs
} from "@/api/voting";
import calculateDislikesLikes from "@/helpers/calculateDislikesLikes";

const state = {
  data: null,
  isLoading: false,
  error: null,

  isVotes: null,
  isVotesLike: null,
  isVodesDislike: null,
  isVotesFavorite: null,

  isSearchDogs: null,
};

export const mutationsTypes = {
  voteLikeStart: "[Voting] vote Like Start",
  voteDislikeStart: "[Voting] vote UnLike Start",
  voteFavoriteStart: "[Voting] vote UnLike Start",

  getSearchImageStart: "[Voting] get Image Start",
  getSearchImageSuccess: "[Voting] get Image Success",
  getSearchImageFailure: "[Voting] get Image Start",

  getVotesStart: "[Voting] get Votes All Start",
  getVotesSuccess: "[Voting] get Votes Success",
  getVotesFailure: "[Voting] get Votes Failure",

  getVotesFavoriteStart: "[Voting] get Votes Favorite Start",
  getVotesFavoriteSuccess: "[Voting] get Votes Favorite Success",
  getVotesFavoriteFailure: "[Voting] get Votes Favorite Failure",

  getSearchDogsStart: "[Voting] get Search Dogs Start",
  getSearchDogsSuccess: "[Voting] get Search Dogs Success",
  getSearchDogsFailure: "[Voting] get Search Dogs Failure",
};

export const actionsTypes = {
  voteLike: "[Voting] vote Like",
  voteDislike: "[Voting] vote Dislike",
  voteFavouriteImage: "[Voting] vote Favourite Image",

  getSearchImage: "[Voting] get Search Image",

  getVotes: "[Voting] get Votes",
  getVotesFavorite: "[Voting] get Votes Favorite",

  getSearchDogs: "[Voting] get Search Dogs",
};

const mutations = {
  // votes
  [mutationsTypes.voteLikeStart](state) { },
  [mutationsTypes.voteDislikeStart](state) { },
  [mutationsTypes.voteFavouriteImageStart](state) { },

  // getSearchImage
  [mutationsTypes.getSearchImageStart](state) {
    state.data = null;
    state.isLoading = true;
    state.error = null;
  },
  [mutationsTypes.getSearchImageSuccess](state, payload) {
    state.data = payload;
    state.isLoading = false;
    state.error = null;
  },
  [mutationsTypes.getSearchImageFailure](state, payload) {
    state.data = null;
    state.isLoading = false;
    state.error = payload;
  },

  // get Votes All
  [mutationsTypes.getVotesStart](state) {
    state.isVotes = null;
    state.isLoading = true;
    state.error = null;
    state.isVotesLike = null;
    state.isVotesDislike = null;
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
  // get Search Dogs
  [mutationsTypes.getSearchDogsStart](state) {
    state.isSearchDogs = null;
    state.isLoading = true;
  },
  [mutationsTypes.getSearchDogsSuccess](state, payload) {
    state.isSearchDogs = payload;
    state.isLoading = false;
  },
  [mutationsTypes.getSearchDogsFailure](state, payload) {
    state.isSearchDogs = null;
    state.error = payload;
    state.isLoading = false;
  },
};

const actions = {
  [actionsTypes.voteFavouriteImage]({ state }) {
    return new Promise((resolve) => {
      voteFavouriteImage(state.data.id)
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
      voteLike(state.data.id)
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
      voteDislike(state.data.id)
        .then((response) => {
          console.log("Dislike");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  [actionsTypes.getSearchImage]({ commit }) {
    commit(mutationsTypes.getSearchImageStart);
    return new Promise((resolve) => {
      getSearchImage()
        .then((response) => {
          commit(mutationsTypes.getSearchImageSuccess, response.data[0]);
        })
        .catch((err) => {
          commit(mutationsTypes.getSearchImageFailure, err);
        });
    });
  },
  [actionsTypes.getVotes]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationsTypes.getVotesStart);
      getVotes()
        .then((response) => {
          let like = [];
          let disLike = [];
          function calculate(votes) {
            votes.forEach((vote) => {
              if (vote.value) {
                like.push(vote);
              } else {
                disLike.push(vote);
              }
            });
          }
          calculate(response.data);
          commit(mutationsTypes.getVotesSuccess, {
            res: response.data,
            like: like,
            dislike: disLike,
          });
        })
        .catch((err) => {
          commit(mutationsTypes.getVotesFailure, err);
        });
    });
  },
  [actionsTypes.getVotesFavorite]({ commit }) {
    return new Promise((resolve) => {
      commit(mutationsTypes.getVotesFavoriteStart);
      getVotesFavourite()
        .then((response) => {
          commit(mutationsTypes.getVotesFavoriteSuccess, response.data);
          console.log("Favourite");
        })
        .catch((err) => {
          commit(mutationsTypes.getVotesFavoriteFailure, response.data);
        });
    });
  },
  [actionsTypes.getSearchDogs]() {
    const requests = state.isVotesLike.map((item) => {
      return getSearchDogs(item.image_id);
    });

    Promise.all(requests)
      .then((response) => {
        console.log(response);
      });

  },
};

export default {
  state,
  mutations,
  actions,
};
