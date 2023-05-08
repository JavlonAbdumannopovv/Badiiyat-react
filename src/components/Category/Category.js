import React, { useState } from "react";
import {
  Container,
  TopTitle,
  TitleWrapper,
  Title,
  Main,
  SearchMain,
} from "./CategoryElements";
import Author from "../Author/Author";
import { badiiyat } from "../Data/data";
import { Link } from "react-router-dom";

const initialStyle = [
  {
    name: "Tarixiy",
    style: { color: "#c9ac8c" },
  },
  {
    name: "Jadid adabiyoti",
    style: { color: "rgba(255, 255, 255, 0.6)" },
  },
  {
    name: "Sovet davri",
    style: { color: "rgba(255, 255, 255, 0.6)" },
  },
  {
    name: "Mustaqillik davri",
    style: { color: "rgba(255, 255, 255, 0.6)" },
  },
];

function Category({ setStyleMain, setId , mainStyle, setMainStyle}) {
  const [type, setType] = useState("Tarixiy");
  const [style, setStyle] = useState(initialStyle);


  const sendData = (id) => {
    setStyleMain((prev) => {
      return { ...prev, display: "none" };
    });
    setId(id);
  };

  const authorHandler = () => {
    return badiiyat.data.map((item) => {
      if (item.type === type) {
        return (
          <Link to="/author" key={item.author.id} onClick={() => sendData(item.author.id)}>
            <Author
              url={item.author.url}
              name={item.author.name}
              born={item.author.born}
              dead={item.author.dead}
              read={item.author.read}
              listen={item.author.listen}
            />
          </Link>
        );
      }
    });
  };

  const searchAuthorHandler = () => {
    return badiiyat.data.map((item) => {
      if (item.author.name.toLowerCase().includes(mainStyle.data.toLowerCase())) {
        return (
          <div key={item.author.id} onClick={() => sendData(item.author.id)}>
            <Author
              url={item.author.url}
              name={item.author.name}
              born={item.author.born}
              dead={item.author.dead}
              read={item.author.read}
              listen={item.author.listen}
            />
          </div>
        );
      }
    });
  };

  const titleClickHandler = (elType, key) => {
    setMainStyle((prev) => {
      return {
        ...prev,
        display: "flex",
        data: "",
      };
    });

    setStyle((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.forEach((item) => {
        item.style.color = "rgba(255, 255, 255, 0.6)";
      });
      return updatedItems;
    });

    setType(elType);

    setStyle((prevItems) => {
      const index = key;
      const updatedItems = [...prevItems];
      updatedItems[index].style.color = "#c9ac8c";
      return updatedItems;
    });
  };

  return (
    <Container>
      <TopTitle className="primary">Asosiy kategoriyalar</TopTitle>
      <TitleWrapper>
        {style.map((item, index) => (
          <Title
            key={index}
            onClick={() => titleClickHandler(item.name, index)}
            style={item.style}
          >
            {item.name}
          </Title>
        ))}
      </TitleWrapper>
      <Main style={mainStyle}>{authorHandler()}</Main>
      {mainStyle.display === "none" ? (
        <SearchMain> {searchAuthorHandler()} </SearchMain>
      ) : null}
    </Container>
  );
}

export default Category;
