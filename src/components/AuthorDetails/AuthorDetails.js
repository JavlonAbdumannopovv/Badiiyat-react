import React from "react";
import infoIcon from "../../assets/infoIcon.svg";
import ball from "../../assets/ball.svg";
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
  Book,
  BooksAll,
  BookImg,
  BookName,
  BookFooter,
} from "./DetailsElements";
import { badiiyat } from "../Data/data";

function AuthorDetails({ id }) {
  const style = {
    borderRadius: "0px 50px 50px 0px",
  };

  return (
    <div key="unique">
      {badiiyat.data.map((item) => {
        if (item.id === id) {
          return (
            <Container> 
              <ColFirst>
                <ImageWrapper>
                  <img
                    width="582px"
                    height="779.33px"
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
                    <BooksTitle>ASARLARI</BooksTitle>{" "}
                    <BooksAll>Barchasini ko`rish</BooksAll>
                  </BooksTop>
                  <BooksMain>
                    {item.books.map((el, ind) => {
                      if (ind !== 4) {
                        return (
                          <Book>
                            <BookImg>
                              <img
                                width="165.15px"
                                height="246.23px"
                                src={el.url}
                                alt={el.name}
                              />
                            </BookImg>
                            <BookName> {el.name} </BookName>
                            <BookFooter>
                              <img src={ball} alt="ball" />
                              {el.ball}.1-{el.comment} ta fikrlar
                            </BookFooter>
                          </Book>
                        );
                      }
                    })}
                  </BooksMain>
                </BooksWrapper>
              </ColSecond>
            </Container>
          );
        }
      })}
    </div>
  );
}

export default AuthorDetails;
