import React from "react";
import readImg from "../../assets/readImg.svg";
import listenImg from "../../assets/listenImg.svg";
import {
  Content,
  ImgWrapper,
  Name,
  Year,
  Footer,
  Wrapper,
} from "./AuthorElements";

function Author({url, name, born, dead, read, listen}) {
  const imgStyle = {
  borderRadius: "15px 15px 0px 0px",
  }
  return (
    <Content>
      <ImgWrapper>
        <img src={url} alt="author-img" width="173.98px" height="132.19px" style={imgStyle}/>
      </ImgWrapper>
      <Name>{name}</Name>
      <Year>
        {born}-{dead}
      </Year>
      <Footer>
        <Wrapper>
          <img src={readImg} alt="read-icon" /> {read}
        </Wrapper>
        <Wrapper>
          <img src={listenImg} alt="listen-icon" /> {listen}
        </Wrapper>
      </Footer>
    </Content>
  );
}

export default Author;
