import styled from "styled-components";
import contentBackImg from "../../assets/card.svg";

export const Content = styled.div`
  width: 173.33px;
  min-height: 236.74px;
  margin: 40px 19px 0;
  border-radius: 15px;
  padding: 0 0 15px;
  cursor: pointer;
  background-image: url(${contentBackImg});
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImgWrapper = styled.div`
  width: 173.98px;
  height: 132.19px;
  border-radius: 15px 15px 0px 0px;
`;

export const Name = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin: 13px 0 0;
  line-height: 20px;
  color: #c9ac8c;
`;

export const Year = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  margin: 5px 0 0;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Footer = styled.div`
  width: 131px;
  height: 24px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 49px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 0;
  font-family: "Steinbeck";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #fff;
`;
