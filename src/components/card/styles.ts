import styled from "styled-components";

export const CardWrapper = styled.div`
  text-align: center;
  width: 170px;
  margin-bottom: 50px;

  img {
    width: 60%;
    transition: 0.2s;
  }

  h3 {
    color: white;
    font-size: 15px;
    font-weight: 300;
  }

  :hover {
    cursor: pointer;
    img {
      transition: 0.2s;
      width: 63%;
    }
  }
`;
