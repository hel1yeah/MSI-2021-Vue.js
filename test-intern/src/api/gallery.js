import axios from "@/api/axios";

// const sub_id = "test-user-26";

const getSearchDogs = (breed) => {
  console.log(breed);
  let query_params = {
    mime_types: breed.mime_types,
    limit: breed.limit,
    random: breed.random,
    breed_id: breed.breed_id,
  };
  return axios.get("/images/search", { params: query_params });
};

export { getSearchDogs };
