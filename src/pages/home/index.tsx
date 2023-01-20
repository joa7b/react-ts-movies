import { useEffect, useState } from "react";

import Banner from "../../components/banner";
import Menu from "../../components/menu";
import api from "../../utils/api/movies.api";
import Movie from "../../utils/types/movies.type";

import {MainWrapper} from"./styles";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const data = await api.getAllMovies();
      setMovies(data);
    };
    getAllMovies();
  }, []);

  return(
    <MainWrapper>
      <Menu />
      <Banner />
    </MainWrapper>
  )
};

export default Home;
