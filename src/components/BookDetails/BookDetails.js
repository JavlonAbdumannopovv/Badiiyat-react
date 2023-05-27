import React from "react";
import imgBall from "../../assets/ball.svg";
import {
  Container,
  Main,
  Image,
  Details,
  Name,
  AuthorWrapper,
  Author,
  Ball,
  Wrapper,
  Property,
  Value,
  FullInfo,
  InfoTitle,
  Line,
  Info,
  FormatWrapper,
  FormatTitle,
  Format,
  FormatSubtitle,
  Price,
  Button,
  Description,
  DescriptionTop,
  TopTitle,
  DescWrapper,
  Desc,
  DescOne,
  Recommended,
  RecommendedTop,
  RecommendedTitle,
  AllBooks,
  RecommendedBooks,
} from "./BookDetailsEl";
import infoIcon from "../../assets/down.svg";
import iconPaper from "../../assets/paper.svg";
import iconAudio from "../../assets/audio.svg";
import iconElektron from "../../assets/elektron.svg";
import Book from "../Book/Book";
import { Link } from "react-router-dom";
import { badiiyat } from "../Data/data";
import { useState } from "react";

const BookDetails = ({ id, setId }) => {
  const style = {
    margin: "0 0 0 10px",
  };

  const topTitle = {
    color: "#C9AC8C",
  };

  const [janre, setJanre] = useState("");

  const sendData = (id) => {
    setId(id);
  };

  return badiiyat.data.map((item) => {
    return item.books.map((book) => {
      if (book.id === id) {
        return (
          <Container>
            <Main>
              <Image>
                <img
                  width="520px"
                  height="810px"
                  src={book.url}
                  alt="mainImg"
                />
              </Image>
              <Details>
                <Name>{book.name}</Name>
                <AuthorWrapper>
                  <Author>{item.author.name}</Author>
                  <img src={imgBall} alt={"img"} style={style} />
                  <Ball>{book.ball}</Ball>
                </AuthorWrapper>
                <Wrapper>
                  <Property>Sahifalar soni: </Property>
                  <Value>{book.page}</Value>
                </Wrapper>
                <Wrapper>
                  <Property>Chop etilgan: </Property>
                  <Value>2021</Value>
                </Wrapper>
                <Wrapper>
                  <Property>Janri: </Property>
                  <Value>{book.janre()}</Value>
                </Wrapper>
                <Wrapper>
                  <Property>Nashriyot: </Property>
                  <Value>{book.publisher()}</Value>
                </Wrapper>
                <FullInfo>
                  <InfoTitle>To`liq ma`lumot</InfoTitle>
                  <img src={infoIcon} alt="down" />
                  <Line></Line>
                </FullInfo>
                <Info>
                  Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил
                  олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл
                  этилган миллат йигит-қизларининг хотирасига бағишланади. Роман
                  воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси
                  шу қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч
                  кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф
                  муҳаббат, кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг
                  бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар,
                  руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир
                  қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради. Ўтган
                  аср бошида Германияда ўқиган талабалар, улар маслаги ва
                  фожиали қисмати бугунги ёшлар мақсади билан бир тарозига
                  тортилади.
                </Info>
                <FormatTitle>Mavjud formatlar</FormatTitle>
                <FormatWrapper>
                  <Format>
                    <img src={iconPaper} alt="paper" />
                    <FormatSubtitle>Qog`oz kitob</FormatSubtitle>
                    <Price>{book.price} 000 so`m</Price>
                  </Format>
                  <Format>
                    <img src={iconAudio} alt="audio" />
                    <FormatSubtitle>Audio kitob</FormatSubtitle>
                    <Price>{book.audioLength} soat</Price>
                  </Format>
                  <Format>
                    <img src={iconElektron} alt="elektron" />
                    <FormatSubtitle>Elektron</FormatSubtitle>
                    <Price>pdf, epub</Price>
                  </Format>
                  <Button>Javonga qo`shish</Button>
                </FormatWrapper>
              </Details>
            </Main>
            <Description>
              <DescriptionTop>
                <Link
                  to={`/:author${item.id}`}
                  key={book.id}
                  onClick={() => sendData(item.id)}
                >
                  <TopTitle>Muallif Haqida</TopTitle>
                </Link>
                <TopTitle style={topTitle}>Kitobdan iqtiboslar</TopTitle>
                <TopTitle>Kitobxonlar taqrizi</TopTitle>
              </DescriptionTop>
              <DescWrapper>
                <Desc>
                  Inson bolasi ne kunlarni ko‘rmaydi?! Har bir odam o‘z g‘ami
                  bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam
                  tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi? Hayot
                  to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi
                  suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib
                  keladi.
                </Desc>
                <DescOne>
                  Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq
                  tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib
                  ketgan.
                </DescOne>
              </DescWrapper>
            </Description>
            <Recommended>
              <RecommendedTop>
                <RecommendedTitle>Sizga yoqishi mumkin</RecommendedTitle>
                <Link to={`/books`} key={book.id}>
                  <AllBooks>Barchasini ko`rish</AllBooks>
                </Link>
              </RecommendedTop>
              <RecommendedBooks>
                {badiiyat.data.map((item1) => {
                  return item1.books.map((book1, i) => {
                    if (book.janre() === book1.janre() && i < 7) {
                      return (
                        <Link
                          to={`/books/book${book1.id}`}
                          key={book1.id}
                          onClick={() => sendData(book1.id)}
                        >
                          <Book
                            name={book1.name}
                            url={book1.url}
                            id={book1.id}
                            comment={book1.comment}
                            ball={book1.ball}
                          />
                        </Link>
                      );
                    } else {
                      return null;
                    }
                  });
                })}
              </RecommendedBooks>
            </Recommended>
          </Container>
        );
      } else {
        return null;
      }
    });
  });
};

export default BookDetails;
