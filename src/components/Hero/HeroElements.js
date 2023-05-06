import styled from "styled-components";
import heroBack from "../../assets/heroBack.svg";

export const Container = styled.div`
  width: 1261.9px;
  margin: 55px auto 0;
`;

export const HeroContent = styled.div`
  width: 1261.9px;
  height: 346.97px;
  background-image: url(${heroBack});
  background-size: cover;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

export const TitleWrapper = styled.div`
  width: 337px;
  height: 201px;
  margin: 45px 0 0 87px;
`;

export const Title = styled.h1`
  font-family: cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 61px;
  text-transform: uppercase;
  line-height: 67px;
  color: #c9ac8c;
`;

export const IndicatorWrapper = styled.div`
  width: 260.48px;
  height: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 87px;
`;

export const Indicator = styled.div`
  width: 57.39px;
  height: 3px;
  background: #fff;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    background: #c9ac8c;
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 270px;
  position: absolute;
  top: 20px;
  right: 0px;
  opacity: 0.5;
`;
