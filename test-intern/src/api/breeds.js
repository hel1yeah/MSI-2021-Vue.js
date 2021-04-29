import axios from "@/api/axios";

const getBreeds = () => {
  return axios.get("/breeds");
};

const getBreedsLimit = (limit) => {
  const query_params = {
    limit,
  };
  return axios.get("/breeds", {
    params: query_params,
  });
};

const getSearchName = (name) => {
  const query_params = {
    q: name,
  };
  return axios.get("/breeds/search", {
    params: query_params,
  });
};

export default {
  getBreeds,
  getBreedsLimit,
  getSearchName,
};
