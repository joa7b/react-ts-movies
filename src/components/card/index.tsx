import Movie from "../../utils/types/movies.type";

import { CardWrapper } from "./styles";

const Card = ({title, description, imdbScore, trailerYoutubeUrl, year}:Movie) => {
    return(
        <CardWrapper>
            <h3>{title}</h3>
        </CardWrapper>
    )
}

export default Card;