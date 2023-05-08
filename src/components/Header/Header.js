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
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <Logo>BADIIYAT</Logo>
        </Link>
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
