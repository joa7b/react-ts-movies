import Header from "../../components/menu";

import { MainWrapper, MainItem, LoginContainer, FormContainer, TitleLogin, InputLogin, ButtonLogin } from "./styles";

const Login = () => {
    return(
        <MainWrapper>
            <Header />
            <MainItem>
                <LoginContainer>
                    <TitleLogin>Login</TitleLogin>
                    <FormContainer action="">
                        <InputLogin type="text" placeholder="Insira o usuário"/>
                        <InputLogin type="text" placeholder="Insira a senha"/>
                        <ButtonLogin>Entrar</ButtonLogin>
                        <p>Cadastre-se</p>
                    </FormContainer>
                </LoginContainer>
            </MainItem>
        </MainWrapper   >
    )
}

export default Login;