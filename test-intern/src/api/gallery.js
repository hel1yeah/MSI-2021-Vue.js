import axios from "@/api/axios";

// const sub_id = "test-user-26";

const getSearchDogs = ({mime_types, limit, random, breed_id}) => {
  let query_params = {
    mime_types,
    limit,
    random,
    breed_id,
  };
  return axios.get("/images/search", { params: query_params });
};

export { getSearchDogs };
