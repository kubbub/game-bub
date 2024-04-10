import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "766b21f8fc704804bb8009b62e58a408",
  },
});
