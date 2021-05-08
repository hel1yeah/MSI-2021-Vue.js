import axios from "@/api/axios";

const getImage = () => {
  const query_params = {
    limit: 1,
    size: "full",
  };
  return axios.get("/images/search", { params: query_params });
};

const voteLike = (id) => {
  let body = {
    image_id: id,
    value: 1,
    sub_id: "test-user-23",
  };
  return axios.post("/votes", body);
};
const voteDislike = (id) => {
  let body = {
    image_id: id,
    value: 0,
    sub_id: "test-user-23",
  };
  return axios.post("/votes", body);
};
const voteFavouriteImage = (id) => {
  let post_body = {
    image_id: id,
    value: 0,
    sub_id: "test-user-23",
  };
  return axios.post("/favourites", post_body);
};
const getVotes = () => {
  let query_params = {
    order: "DESC",
    limit: 5,
    sub_id: "test-user-23",
  };
  return axios.get("/votes", { params: query_params });
};

export default {
  getImage,
  getVotes,
  voteLike,
  voteDislike,
  voteFavouriteImage,
};
