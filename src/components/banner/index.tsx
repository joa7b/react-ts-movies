import {
  BannerWrapper,
  BannerItem,
  ButtonContainer,
  BannerFilter,
  TitleContainer,
  CategoryContainer,
  DetailsContainer
} from "./styles";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerFilter>
        <BannerItem>
          <CategoryContainer>Science Fiction</CategoryContainer>
          <div>
            <img src="../../../assets/images/star-fill.svg" alt="" />
            <img src="../../../assets/images/star-fill.svg" alt="" />
            <img src="../../../assets/images/star-fill.svg" alt="" />
            <img src="../../../assets/images/star-fill.svg" alt="" />
            <img src="../../../assets/images/star-fill.svg" alt="" />
          </div>
          <TitleContainer>Godzilla vs. Kong</TitleContainer>
          <DetailsContainer>
            In a time when monsters walk the Earth, humanity’s fight for its
            future sets Godzilla and Kong on a collision course that will see
            the two most powerful forces of nature on the planet collide in a
            spectacular battle for the ages.
          </DetailsContainer>
          <ButtonContainer>Assistir agora</ButtonContainer>
        </BannerItem>
      </BannerFilter>
    </BannerWrapper>
  );
};

export default Banner;
