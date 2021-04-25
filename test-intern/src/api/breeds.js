import axios from "@/api/axios";

const getBreeds = (limit) => {
  const query_params = {
    limit,
  };
  return axios.get("/breeds", {
    params: query_params,
  });
};

const getBreedsNames = () => {
  return axios.get("/breeds");
};

const getBreedsForName = (name) => {
  const query_params = {
    q: name,
  };
  return axios.get("/breeds/search", {
    params: query_params,
  });
};

const getNameDog = () => {
  return axios.get("/breeds");
}

export default {
  getBreeds,
  getBreedsNames,
  getBreedsForName,
  getNameDog,
};
