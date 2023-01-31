import Banner from "../../components/banner";
import Menu from "../../components/menu";
import Slide from "../../components/slide";

import {MainWrapper, MainItem} from"./styles";

const Home = () => {
  return(
    <MainWrapper>
      <Menu />
      <MainItem>
        <Banner />
        <Slide />
      </MainItem>
    </MainWrapper>
  )
};

export default Home;
