import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 30px 80px 0;
  text-align: center;
`;

export const TopTitle = styled.div`
  font-family: "Style Script";
  font-style: normal;
  font-weight: 400;
  font-size: 31px;
  margin: auto;
  line-height: 34px;
  color: #c9ac8c;
`;

export const TitleWrapper = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto 0;
`;

export const Title = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    color: #c9ac8c;
  }

  &:active {
    color: #c9ac8c;
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const SearchMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  background: #333;
`; 
