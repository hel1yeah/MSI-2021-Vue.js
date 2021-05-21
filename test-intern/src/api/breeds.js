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



export {
  getBreeds,
  getBreedsLimit,

};
