import styled from "styled-components";

export const MainWrapper = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const MainItem = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(150, 150, 150, 1) 50%
  );
  border-bottom: 1px solid black;
  width: 100vw;
  height: 100vh;
`;

export const SignUpContainer = styled.div`
  padding: 70px;
  background-color: black;
  color: white;
  margin: 8rem auto;
  width: 500px;
  height: 500px;
`;

export const TitleLogin = styled.h2`
  margin-bottom: 30px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  p {
    font-size: small;
    :hover {
      cursor: pointer;
      color: blue;
    }
  }
`;

export const InputSignUp = styled.input`
  padding: 15px;
  margin-bottom: 20px;
  border: none;
  border-radius: 2px;
`;

export const ButtonSignUp = styled.button`
  padding: 15px;
  border-radius: 2px;

  :hover {
    cursor: pointer;
    background-color: white;
  }
`;
