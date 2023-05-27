import React from "react";
import {
  BookImg,
  BookName,
  BookAuthor,
  BookFooter,
  Content,
} from "./BookElements";
import imgBall from "../../assets/ball.svg";

const Book = ({ id, name, url, author, comment, ball }) => {
  const style = {
    borderRadius: "15px",
  };
  return (
    <Content>
      <BookImg>
        <img
          width="165.15px"
          height="246.23px"
          src={url}
          alt={name}
          style={style}
        />
      </BookImg>
      <BookName>{name}</BookName>
      <BookAuthor>{author}</BookAuthor>
      <BookFooter>
        <img src={imgBall} alt="ball" />
        {ball}.1-{comment} ta fikrlar
      </BookFooter>
    </Content>
  );
};

export default Book;
