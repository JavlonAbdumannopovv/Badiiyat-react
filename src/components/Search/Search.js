import React from "react";
import searchIcon from "../../assets/searchIcon.svg";
import { Content, Title, InputWrapper, Button } from "./SearchDetails";

function Search({ setMainStyle }) {
  const inputStyle = {
    width: "709.58px",
    height: "47.02px",
    padding: "0 18px",
    background: "#404040",
    borderRadius: "15px",
    border: "none",
    outline: "none",
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "16px",
    color: "rgba(255, 255, 255, 0.3)",
  };

  const searchAuthor = (e) => {
    if (e.target.value === "") {
      setMainStyle((prev) => {
        return {
          ...prev,
          display: "flex",
          data: `${e.target.value}`,
        };
      });
    } else {
      setMainStyle((prev) => {
        return {
          ...prev,
          display: "none",
          data: `${e.target.value}`,
        };
      });
    }
  };

  return (
    <Content>
      <Title>Qidirish</Title>
      <InputWrapper>
        <input
          onChange={searchAuthor}
          style={inputStyle}
          type="text"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar"
        />
        <Button>
          <img src={searchIcon} alt="search" /> Izlash
        </Button>
      </InputWrapper>
    </Content>
  );
}

export default Search;
