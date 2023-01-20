import { useEffect, useState } from "react";
import Menu from "../../components/menu";
import api from "../../utils/api/movies.api";
import Movie from "../../utils/types/movies.type";

import "./styles";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const data = await api.getAllMovies();
      setMovies(data);
    };
    getAllMovies();
  }, []);

  return (
    <>
      <Menu />
      {movies.map((e: Movie) => (
        <p key={e.title}>{e.title}</p>
      ))}
    </>
  );
};

export default Home;
