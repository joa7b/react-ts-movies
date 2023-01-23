import styled from "styled-components";

export const BannerWrapper = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;
  background-image: url("../../../assets/images/1126978.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerFilter = styled.section`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const BannerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 15px;
  margin-left: 100px;
  color: white;
`;

export const TitleContainer = styled.h1`
  font-size: 56px;
  font-weight: 500;
`;

export const CategoryContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 29, 29, 0.5);
  border-radius: 0px 8px;
  width: 150px;
  height: 25px;
  color: #0feffd;
`;

export const DetailsContainer = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  width: 632px;
  height: 96px;
`;

export const StarContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.button`
  width: 200px;
  height: 56px;
  background-color: transparent;
  box-shadow: 0px 16px 16px 4px rgba(0, 0, 0, 0.12);
  border-radius: 40px;
  border: 1px solid #ff00f5;
  color: white;
`;
