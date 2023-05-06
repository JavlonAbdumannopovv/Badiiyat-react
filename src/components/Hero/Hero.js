import React, { useEffect, useState } from "react";
import {
  Container,
  HeroContent,
  TitleWrapper,
  Title,
  IndicatorWrapper,
  Indicator,
  ImageWrapper,
} from "./HeroElements";

const heroArr = [
  {
    id: 1,
    type: "tarixiy",
    title: "Temuriylar davri adabiyoti",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNiPn-ZzeMwAmuUoaa-ArFj7XMBMXtSt_cfQ&usqp=CAU",
    style: { color: "#c9ac8c" },
  },
  {
    id: 2,
    type: "jadid",
    title: "Jadid davri adabiyoti",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXQWejA3-L43XxZc9xRf6csIeRD2J9uWE5pA&usqp=CAU",
    style: { color: "rgba(255, 255, 255, 0.6)" },
  },
  {
    id: 3,
    type: "sovet",
    title: "Sovet Davri adabiyoti",
    url: "data:image/jpeg;base64,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",
    style: { color: "rgba(255, 255, 255, 0.6)" },
  },
  {
    id: 4,
    type: "mustaqillik",
    title: "Mustaqillik davri adabiyoti",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfRfAckMACXklYB9APZc2uCPo2ccPOTZb8w&usqp=CAU",
    style: { color: "rgba(255, 255, 255, 0.6)" },
  },
];
function Hero() {
  const [activeId, setActiveId] = useState(1);

  const activeIdHandler = (id) => {
    setActiveId(() => {
      return id;
    });
  };

  return (
    <Container>
      <HeroContent>
        <TitleWrapper>
          {heroArr.map((item) => {
            if (activeId === item.id) {
              return <Title>{item.title}</Title>;
            }
          })}
        </TitleWrapper>
        <IndicatorWrapper>
          {heroArr.map((item) => (
            <Indicator
              onClick={() => activeIdHandler(item.id)}
              style={item.style}
            ></Indicator>
          ))}
        </IndicatorWrapper>
        <ImageWrapper>
          {heroArr.map((item) => {
            if (activeId === item.id) {
              return (
                <img
                  width="300px"
                  height="270px"
                  src={item.url}
                  alt={item.type}
                />
              );
            }
          })}
        </ImageWrapper>
      </HeroContent>
    </Container>
  );
}

export default Hero;
