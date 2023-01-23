import { useEffect, useState } from "react";

import api from "../../utils/api/movies.api";
import Banner from "../../components/banner";
import Menu from "../../components/menu";
import Movie from "../../utils/types/movies.type";
import Slide from "../../components/slide";

import {MainWrapper, MainItem} from"./styles";

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
      <MainItem>
        <Banner />
        <Slide />
      </MainItem>
    </MainWrapper>
  )
};

export default Home;
