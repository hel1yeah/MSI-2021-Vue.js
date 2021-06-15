import axios from "@/api/axios";

const sub_id = "test-user-26";

const getSearchDogs = ({ mime_types, limit, random, breed_id }) => {
  let query_params = {
    mime_types,
    limit,
    random,
    breed_id,
  };
  return axios.get("/images/search", { params: query_params });
};

const voteFavouriteImage = (id) => {
  let post_body = {
    image_id: id,
    sub_id,
  };
  return axios.post("/favourites", post_body);
};

export { getSearchDogs, voteFavouriteImage };
