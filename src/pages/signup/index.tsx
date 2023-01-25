import Header from "../../components/menu";

import { MainWrapper, MainItem, SignUpContainer, FormContainer, InputSignUp, ButtonSignUp, TitleLogin } from "./styles";

const Dashboard = () => {
  return (
    <MainWrapper>
      <Header />
      <MainItem>
        <SignUpContainer>
          <TitleLogin>Cadastre-se</TitleLogin>
          <FormContainer action="">
            <InputSignUp type="text" placeholder="Insira seu nome" />
            <InputSignUp type="text" placeholder="Insira um nome de usuário" />
            <InputSignUp type="text" placeholder="Insira uma senha" />
            <ButtonSignUp>Enviar</ButtonSignUp>
            <p>Voltar</p>
          </FormContainer>
        </SignUpContainer>
      </MainItem>
    </MainWrapper>
  );
};

export default Dashboard;
