import axios from "axios";

const instance = axios({
  baseURL: "http://localhost:4000",
});

export default instance;
