import Movie from "../../utils/types/movies.type";
import Card from "../card";

import { SlideWrapper } from "./styles";

const Slide = () => {
    const filmes: Array<Movie> = [
        {
            title: "The Last of Us",
            description: "Joel e Ellie, um par conectado pela dureza do mundo em que vivem, são forçados a suportar circunstâncias brutais e assassinos implacáveis ​​em uma jornada pela América pós-pandemia.",
            imdbScore: 9.4,
            trailerYoutubeUrl: "https://www.youtube.com/watch?v=VHNzi1CjDb0",
            year: 2023
        }
    ]

    return(
        <SlideWrapper>
            {filmes.map((e: Movie) => <Card title={e.title} description={e.description} imdbScore={e.imdbScore} trailerYoutubeUrl={e.trailerYoutubeUrl} year={e.year}/>)}
        </SlideWrapper>
    )
}


export default Slide;