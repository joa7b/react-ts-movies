import axios from "axios";
import Movie from "../types/movies.type";

const baseURL = "https://api.themoviedb.org";
const keyURL = "d034bc759c3332d9970b4864479497dc";
const imageURL = 'https://image.tmdb.org/t/p/original';

const moviesApi = {
  getPopularMovies: async () => {
    try {
      const response = await axios.get(`${baseURL}/3/movie/popular?api_key=${keyURL}`);
      return response.data.results
    } catch (err) {
      console.log(err)
    }
  },

  createMovies: async (user:Movie) => {
    try {
      const response = await axios.post(`${baseURL}/movies`, user)
      return response.data
    } catch (err) {
      console.log(err)
    }
  },

  getImage: async (image:string) => {
    try {
      const response = await axios.get(`${imageURL}${image}`)
      return response
    } catch (err) {
      console.log(err)
    }
  }
};

export default moviesApi;
