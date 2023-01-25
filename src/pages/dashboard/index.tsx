import Header from "../../components/menu";

import { MainWrapper, MainItem } from "./styles";

const Dashboard = () => {
  return (
    <MainWrapper>
      <Header />
      <MainItem>
        <div>
          <h2>Cadastro de produto</h2>
          <form action="">
            <input type="text" placeholder="Insira o título" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Insira a descrição"
            />
            <input type="number" placeholder="Ano de lançamento" />
            <input type="text" placeholder="Link da imagem de capa" />
            <input type="number" placeholder="IMDB Score" />
            <input type="text" placeholder="Link trailer no youtube" />
            <button>Enviar</button>
          </form>
        </div>
      </MainItem>
    </MainWrapper>
  );
};

export default Dashboard;
