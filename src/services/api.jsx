import axios from "axios";

// base da url: https://api.thedogapi.com/v1/

const api = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: {
    "x-api-key":
      "live_QL7vqUZkfVnskjmk5qGlUJOc0HgmyYUBWFmanJqVktzhloTaFP4fOgfX0RKIySsH",
  },
});

export default api;
