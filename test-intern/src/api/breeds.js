import axios from "@/api/axios";

const getBreeds = () => {
  return axios.get("https://api.thedogapi.com/v1/breeds");
};

export default {
  getBreeds,
};
