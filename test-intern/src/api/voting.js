import axios from "@/api/axios";

const voteLike = (id) => {
  let body = {
    image_id: id,
    value: 1,
    sub_id: "test-user-24",
  };
  return axios.post("/votes", body);
};

const voteDislike = (id) => {
  let body = {
    image_id: id,
    value: 0,
    sub_id: "test-user-24",
  };
  return axios.post("/votes", body);
};

const voteFavouriteImage = (id) => {
  let post_body = {
    image_id: id,
    sub_id: "test-user-24",
  };
  return axios.post("/favourites", post_body);
};

const getImage = () => {
  const query_params = {
    limit: 1,
    size: "full",
  };
  return axios.get("/images/search", { params: query_params });
};

const getVotes = () => {
  let query_params = {
    order: "DESC",
    sub_id: "test-user-24",
  };
  return axios.get("/votes", { params: query_params });
};

const getVotesFavourite = () => {
  let query_params = {
    order: "DESC",
    sub_id: "test-user-24",
  };
  return axios.get("/favourites", { params: query_params });
};

export default {
  voteLike,
  voteDislike,
  voteFavouriteImage,
  getImage,
  getVotes,
  getVotesFavourite,
};
