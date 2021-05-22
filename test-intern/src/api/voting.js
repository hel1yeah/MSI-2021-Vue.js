import axios from "@/api/axios";

const sub_id = 'test-user-26';

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
    size: "full",
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


const getSearchDogs = (id) => {
  // console.log(await axios.get(`/images/${id}`));
  return axios.get(`/images/${id}`)
    .then((response) => response.data);
};

export {
  voteLike,
  voteDislike,
  voteFavouriteImage,
  getSearchImage,
  getVotes,
  getVotesFavourite,
  getSearchDogs,
};
