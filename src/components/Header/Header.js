import React from "react";
import {
  Container,
  LogoWrapper,
  Logo,
  Nav,
  NavItem,
  AccountWrapper,
} from "./HeaderElements";
import accountImg from "../../assets/account.svg";

function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Logo>BADIIYAT</Logo>
      </LogoWrapper>
      <Nav>
        <NavItem >Bosh sahifa</NavItem>
        <NavItem >Nasr</NavItem>
        <NavItem>Nazm</NavItem>
        <NavItem>Maqolalar</NavItem>
        <NavItem>Forum</NavItem>
      </Nav>
      <AccountWrapper>
        <img src={accountImg} alt="account"/>
      </AccountWrapper>
    </Container>
  );
}

export default Header;
