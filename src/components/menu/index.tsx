import styled from "styled-components";

const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 60px;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(51,51,51,1) 35%, rgba(0,212,255,0) 100%);
  height: 100vh;
  position: absolute;
  z-index: 99;
`;

const MenuItem = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

const Image = styled.img`
  padding: 7px;
  width: 40px;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    background-color: gray;
  }
`;


const Menu = () => {
  return (
    <MenuWrapper>
      <MenuItem>
        <Image src="../../../assets/images/house.svg" alt="Navbar" />
      </MenuItem>

      <MenuItem>
        <Image src="../../../assets/images/arrow-through-heart-fill.svg" alt="" />
      </MenuItem>

      <MenuItem>
        <Image src="../../../assets/images/person-fill.svg" alt="" />
        <Image src="../../../assets/images/box-arrow-left.svg" alt="" />
      </MenuItem>
    </MenuWrapper>
  );
};

export default Menu;
