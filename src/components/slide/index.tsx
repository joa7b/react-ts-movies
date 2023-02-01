import { useState, useEffect } from "react";
import Movie from "../../utils/types/movies.type";
import Card from "../card";
import moviesApi from "../../utils/api/movies.api";

import { SlideWrapper } from "./styles";

const Slide = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const data: Array<Movie> = await moviesApi.getPopularMovies();
      setMovies(data);
    };
    getPopularMovies();
  }, []);

  console.log(movies);

  return (
    <SlideWrapper>
      {movies &&
        movies.map((e) => {
          const imageKey = `https://image.tmdb.org/t/p/original${e.poster_path}`
          return <Card title={e.title} image={imageKey} />;
        })}
    </SlideWrapper>
  );
};

export default Slide;
