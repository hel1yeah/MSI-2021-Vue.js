import axios from "axios";

const API_KEY = "165fc844-67b8-4e30-bb65-744224e95166";
axios.defaults.headers.common["x-api-key"] = API_KEY;

export default axios;
