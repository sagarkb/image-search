import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID uclhVIJURlBphAZDVqef1LMwroDVpqD56wYwKduwC4Y",
  },
});
