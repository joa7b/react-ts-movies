import Movie from "../../utils/types/movies.type";

import { CardWrapper } from "./styles";

const Card = ({title, description, imdbScore, trailerYoutubeUrl, year, image}:Movie) => {
    return(
        <CardWrapper>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </CardWrapper>
    )
}

export default Card;