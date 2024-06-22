import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "28af76591f104a2b8f7c9860327ed946",
  },
});
