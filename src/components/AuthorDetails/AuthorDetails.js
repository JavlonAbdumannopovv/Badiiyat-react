import React, { useEffect, useState } from "react";
import infoIcon from "../../assets/infoIcon.svg";
import {
  Container,
  ColFirst,
  ImageWrapper,
  LifeTime,
  Born,
  BornTop,
  BornTitle,
  BornLocation,
  Line,
  Dead,
  DeadTop,
  DeadTitle,
  DeadLocation,
  ColSecond,
  NameWrapper,
  Name,
  About,
  InfoWrapper,
  InfoTitleWrapper,
  InfoTitle,
  Info,
  BooksWrapper,
  BooksTop,
  BooksTitle,
  BooksMain,
  BooksAll,
} from "./DetailsElements";
import { badiiyat } from "../Data/data";
import { Link } from "react-router-dom";
import Book from "../Book/Book";

function AuthorDetails({ id, setId }) {
  const style = {
    borderRadius: "0px 50px 50px 0px",
  };

  const [item, setItem] = useState(badiiyat.data[0]);

  const sendData = (id) => {
    setId(id);
  };

  // let pathname = window.location.pathname;
  // pathname = pathname[pathname.length - 1];
  useEffect(() => {
    setItem(() => {
      const data = badiiyat.data.filter((item) => item.id === id);
      return data[0];
    });
    // setId(pathname);
  }, [id, setId]);

  return (
    <div key={item.id}>
      <Container>
        <ColFirst>
          <ImageWrapper>
            <img
              width="582px"
              height="779.34px"
              style={style}
              src={item.author.url}
              alt={item.author.name}
            />
          </ImageWrapper>
          <LifeTime>
            <Born>
              <BornTop>Tavallud sanasi</BornTop>
              <BornTitle>5-AVG {item.author.born}</BornTitle>
              <BornLocation>{item.author.location}</BornLocation>
            </Born>
            <Line>-</Line>
            <Dead>
              <DeadTop>Vafot etgan sanasi</DeadTop>
              <DeadTitle>24-May {item.author.dead}</DeadTitle>
              <DeadLocation>{item.author.location}</DeadLocation>
            </Dead>
          </LifeTime>
        </ColFirst>
        <ColSecond>
          <NameWrapper>
            <Name>{item.author.name}</Name>
          </NameWrapper>
          <About>{item.author.about}</About>
          <InfoWrapper>
            <InfoTitleWrapper>
              <img src={infoIcon} alt="infoIcon" />
              <InfoTitle>IJODI</InfoTitle>
            </InfoTitleWrapper>
            <Info>{item.author.info}</Info>
          </InfoWrapper>
          <BooksWrapper>
            <BooksTop>
              <BooksTitle>ASARLARI</BooksTitle>
              <Link to="/books">
                <BooksAll>Barchasini ko`rish</BooksAll>
              </Link>
            </BooksTop>
            <BooksMain>
              {item.books.map((el, ind) => {
                if (ind !== 4) {
                  return (
                    <Link
                      to={`/books/book${el.id}`}
                      key={el.id}
                      onClick={() => sendData(el.id)}
                    >
                      <Book
                        id={el.id}
                        name={el.name}
                        url={el.url}
                        ball={el.ball}
                        comment={el.comment}
                      />
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
            </BooksMain>
          </BooksWrapper>
        </ColSecond>
      </Container>
    </div>
  );
}

export default AuthorDetails;
