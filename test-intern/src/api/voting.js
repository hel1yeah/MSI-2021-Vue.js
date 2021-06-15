import axios from "@/api/axios";

const sub_id = "test-user-26";

const voteLike = (id) => {
  let body = {
    image_id: id,
    value: 1,
    sub_id,
  };
  return axios.post("/votes", body);
};

const voteDislike = (id) => {
  let body = {
    image_id: id,
    value: 0,
    sub_id,
  };
  return axios.post("/votes", body);
};
const voteDelete = (id) => {
  return axios.delete(`/votes/${id}`);
};
const voteDeleteFavorite = (id) => {
  return axios.delete(`/favourites/${id}`);
};

const voteFavouriteImage = (id) => {
  let post_body = {
    image_id: id,
    sub_id,
  };
  return axios.post("/favourites", post_body);
};

const getSearchImage = () => {
  const query_params = {
    limit: 1,
    size: "small",
  };
  return axios.get("/images/search", { params: query_params });
};

const getVotes = () => {
  let query_params = {
    sub_id,
  };
  return axios.get("/votes", { params: query_params });
};

const getVotesFavourite = () => {
  let query_params = {
    order: "DESC",
    sub_id,
  };
  return axios.get("/favourites", { params: query_params });
};


const getSearchDogs = (image_id, vote) =>
  axios.get(`/images/${image_id}`).then(({ data }) => ({
    ...data,
    vote_id: vote,
  }));

export {
  voteLike,
  voteDislike,
  voteDelete,
  voteDeleteFavorite,
  voteFavouriteImage,
  getSearchImage,
  getVotes,
  getVotesFavourite,
  getSearchDogs,
};
