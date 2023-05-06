import { useState } from "react";
import Category from "../Category/Category";
import Header from "../Header/Header";
import { Main } from "./BookMarketEL";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";

function BookMarket() {
  const [styleMain, setStyleMain] = useState({ display: "block" });
  const [id, setId] = useState(null);
  const [mainStyle, setMainStyle] = useState({
    display: "flex",
    data: "",
  });

  return (
    <div className="App">
      <Header />
      <Main style={styleMain}>
        <Hero />
        <Search setMainStyle={setMainStyle} />
        <Category
          setMainStyle={setMainStyle}
          mainStyle={mainStyle}
          setStyleMain={setStyleMain}
          setId={setId}
        />
      </Main>
      {styleMain.display === "none" ? <AuthorDetails id={id} /> : null}
    </div>
  );
}

export default BookMarket;
