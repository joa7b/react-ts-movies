import Header from "../../components/menu";
import moviesApi from "../../utils/api/movies.api";
import { useNavigate } from "react-router-dom";

import { MainWrapper, MainItem, FormContainer, InputContainer, TextareaContainer, ButtonContainer } from "./styles";

const Dashboard = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: e.currentTarget.titleMovie.value,
      description: e.currentTarget.description.value,
      year: e.currentTarget.year.value,
      image: e.currentTarget.image.value,
      imdbScore: e.currentTarget.imdbScore.value,
      trailerYoutubeUrl: e.currentTarget.trailerYoutubeUrl.value
    }

    console.log(data)

    await moviesApi.createMovies(data);

    navigate("/home")
  }



  return (
    <MainWrapper>
      <Header />
      <MainItem>
        <div>
          <h2>Cadastro de produto</h2>
          <FormContainer action=""  onSubmit={handleSubmit}>
            <InputContainer type="text" name="titleMovie" placeholder="Insira o título" />
            <TextareaContainer
              name="description"
              id=""
              cols={30}
              rows={10}
              placeholder="Insira a descrição"
            />
            <InputContainer type="number" name="year" placeholder="Ano de lançamento" />
            <InputContainer type="text" name="image" placeholder="Link da imagem de capa" />
            <InputContainer type="number" name="imdbScore" placeholder="IMDB Score" />
            <InputContainer type="text" name="trailerYoutubeUrl" placeholder="Link trailer no youtube" />
            <ButtonContainer type="submit">Enviar</ButtonContainer>
          </FormContainer>
        </div>
      </MainItem>
    </MainWrapper>
  );
};

export default Dashboard;
