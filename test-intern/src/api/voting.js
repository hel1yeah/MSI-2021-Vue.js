import axios from "@/api/axios";

const getImage = () => {
  const query_params = {
    limit: 1,
    size: "full",
  };
  return axios.get("/images/search", { params: query_params });
};

const voteLike = (id) => {
  let query_params = {
    image_id: id,
    value: 1,
    // 'sub_id': "masdy-usasder-133333333434234",
  };
  return axios.post("/votes", { body: query_params });
};

export default {
  getImage,
  voteLike,
};
