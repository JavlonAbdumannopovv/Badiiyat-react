import React, {  useState } from "react";
import {
  Container,
  TopTitle,
  TitleWrapper,
  Title,
} from "./CategoryElements";


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

function Category({ setType , setMainStyle}) {

  const [style, setStyle] = useState(initialStyle);



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
    </Container>
  );
}

export default Category;
