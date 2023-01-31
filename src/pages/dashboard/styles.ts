import styled from "styled-components";

export const MainWrapper = styled.main`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(150, 150, 150, 1) 50%
  );
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const MainItem = styled.section`
  border: 1px solid white;
  width: 400px;
  margin: auto;
  padding: 15px;
  background-color: black;
  color: white;

  h2 {
    margin-bottom: 30px;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.input`
  padding: 10px;
  border-radius: 3px;
  border: none;
  margin-bottom: 20px;
`;

export const TextareaContainer = styled.textarea`
  margin-bottom: 20px;
  border-radius: 3px;
  padding: 10px;
  border: none;
`;

export const ButtonContainer = styled.button`
  padding: 15px;
  border: none;
  border-radius: 3px;
  background-color: aliceblue;

  :hover {
    cursor: pointer;
    background-color: #cad8e4;
  }
`;
