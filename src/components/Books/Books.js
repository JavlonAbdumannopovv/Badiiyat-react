import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Category from "../Category/Category";
import BooksMain from "./BooksMain/BooksMain";

const Books = ({ setMainStyle, mainStyle, id, setId }) => {
  const [type, setType] = useState("Tarixiy");

  return (
    <div>
      <Hero />
      <Search setMainStyle={setMainStyle} mainStyle={mainStyle} />
      <Category setMainStyle={setMainStyle} setType={setType} />
      <BooksMain type={type} setId={setId} mainStyle={mainStyle} />
    </div>
  );
};

export default Books;
