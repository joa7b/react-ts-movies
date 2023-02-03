import Header from "../../components/menu";
import { useNavigate } from "react-router-dom";

import { MainWrapper, MainItem, LoginContainer, FormContainer, TitleLogin, InputLogin, ButtonLogin } from "./styles";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home')
    }

    return(
        <MainWrapper>
            <Header />
            <MainItem>
                <LoginContainer>
                    <TitleLogin>Login</TitleLogin>
                    <FormContainer action="">
                        <InputLogin type="text" placeholder="Insira o usuário"/>
                        <InputLogin type="text" placeholder="Insira a senha"/>
                        <ButtonLogin onClick={handleLogin}>Entrar</ButtonLogin>
                        <p>Cadastre-se</p>
                    </FormContainer>
                </LoginContainer>
            </MainItem>
        </MainWrapper   >
    )
}

export default Login;