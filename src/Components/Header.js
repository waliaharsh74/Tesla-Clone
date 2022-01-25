import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a>
        <img src="./images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#"> Model S</a>
          <a href="#"> Model 3</a>
          <a href="#"> Model X</a>
          <a href="#"> Model Y</a>
          <a href="#"> Solar Roof</a>
          <a href="#"> Solar Panel</a>
        </p>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <MenuIcon onClick={() => setBurgerStatus(true)}>Menu</MenuIcon>
      </RightMenu>
      <BurgerNavs show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
      </BurgerNavs>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  min-height: 32px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top:0;
  left:0:
  right:0;
  z-index: 1;
  
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  felx: 1;
  margin-left: 180px;
  margin-right: 70px;
  padding: 0 8px;
  @media (max-width: 786px) {
    display: none;
  }

  p {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-left: 50px;
  @media (max-width: 786px) {
    display: none;
  }
`;
const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  cursor: pointer;
  padding: 0 10px;
  margin-left: 05px;
`;
const BurgerNavs = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  z-index: 100;
  padding: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
