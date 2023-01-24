import { useState, useEffect } from "react";
import Movie from "../../utils/types/movies.type";
import Card from "../card";
import moviesApi from "../../utils/api/movies.api";

import { SlideWrapper } from "./styles";

const Slide = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
      const getAllMovies = async () => {
        const data: Array<Movie> = await moviesApi.getAllMovies();
        setMovies(data);
      };
      getAllMovies();
    }, []);


    return(
        <SlideWrapper>
            {movies.map((e) => <Card title={e.title} description={e.description} imdbScore={e.imdbScore} image={e.image} trailerYoutubeUrl={e.trailerYoutubeUrl} year={e.year}/>)}
        </SlideWrapper>
    )
}


export default Slide;