import axios from "axios";
import Movie from "../types/movies.type";

const baseURL = "http://localhost:3000";

const moviesApi = {
  getAllMovies: async () => {
    try {
      const response = await axios.get(`${baseURL}/movies`);
      return response.data
    } catch (err) {
      console.log(err);
    }
  },

  createMovies: async (user:Movie) => {
    try {
      const response = await axios.post(`${baseURL}/movies`, user)
      return response.data
    } catch (err) {
      console.log(err)
    }
  }
};

export default moviesApi;
