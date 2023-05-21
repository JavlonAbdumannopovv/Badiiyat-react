import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  border-bottom: 1px solid #c9ac8c;
  background: red;
`;

export const LogoWrapper = styled.div`
  width: 500px;
`;

export const Logo = styled.h1`
  font-family: 'Style Script';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 144.4%;
  color: #c9ac8c;
  cursor: pointer;
`;

export const Nav = styled.div`
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  font-family: "Open Sans";
  line-height: 144.4%;
  padding: 28px 12px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all .4s ease;

  &:hover{
    border-bottom: 2px solid #fff;
  }
`;

export const AccountWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
