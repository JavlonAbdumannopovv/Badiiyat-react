import styled from "styled-components";
import desc from "../../assets/desc.svg";

export const Container = styled.div`
  width: 100%;
  padding: 57px 80px;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.div`
  width: 519.29px;
  height: 810.13px;
  border-radius: 15px;
  overflow: hidden;
`;

export const Details = styled.div`
  width: 728.62px;
`;

export const Name = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 43px;
  color: #c9ac8c;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 209px;
  margin: 13.5px 0 30.5px;
`;

export const Author = styled.div`
  padding: 0 10px 0 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #c9ac8c;
  border-right: 1px solid #fff;
`;

export const Ball = styled.div`
  margin: 0 0 0 5px;
  font-weight: 300;
  font-size: 12px;
  line-height: 144.4%;
  color: rgba(255, 255, 255, 0.6);
`;

export const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;

export const Property = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Value = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  margin: 0 0 0 10px;
`;

export const FullInfo = styled.div`
  width: 100%;
  height: 36px;
  margin: 28px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #c9ac8c;
`;

export const Line = styled.div`
  width: 564.25px;
  height: 0px;
  border: 1px solid rgba(201, 172, 140, 0.6);
`;

export const Info = styled.div`
  width: 713.83px;
  font-weight: 400;
  font-size: 16px;
  line-height: 144.4%;
  color: rgba(255, 255, 255, 0.8);
`;

export const FormatTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #c9ac8c;
  margin: 37px 0 28px;
`;

export const FormatWrapper = styled.div`
  width: 700px;
  height: 72px;
  display: flex;
  align-items: center;
`;

export const Format = styled.div`
  width: 118px;
  height: 82px;
  text-align: center;
  margin: 0 26px 0 0;
`;

export const FormatSubtitle = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  margin: 8px 0;
`;

export const Price = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Button = styled.div`
  width: 200px;
  height: 48px;
  margin: 0 0 0 100px;
  background: #c9ac8c;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3c2710;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #ecb275;
  }
`;

export const Description = styled.div`
  width: 100%;
`;

export const DescriptionTop = styled.div`
  width: 644px;
  height: 40px;
  margin: 54px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    color: #c9ac8c;
  }
`;

export const DescWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Desc = styled.div`
  width: 600px;
  height: 230px;
  padding: 45px 100px 0px 40px;
  background-image: url(desc);
  background: linear-gradient(
    229.41deg,
    #232323 -1.76%,
    rgba(35, 35, 35, 0) 85.75%
  );
  border-radius: 15px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const DescOne = styled.div`
  width: 600px;
  height: 230px;
  padding: 100px 0px 0px 40px;
  background-image: url(desc);
  background: linear-gradient(
    229.41deg,
    #232323 -1.76%,
    rgba(35, 35, 35, 0) 85.75%
  );
  border-radius: 15px;
`;

export const Recommended = styled.div`
  width: 100%;
`;

export const RecommendedTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 77px 0 30px;
`;

export const RecommendedTitle = styled.div`
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  color: #c9ac8c;
`;

export const AllBooks = styled.div`
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #c9ac8c;
  }
`;

export const RecommendedBooks = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;
