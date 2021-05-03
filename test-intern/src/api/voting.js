import axios from "@/api/axios";

const getImage = () => {
  return axios.get("/images/search");
};

export default {
  getImage,


};