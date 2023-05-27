import React, { useState } from "react";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Category from "../Category/Category";
import Authors from "./Authors/Authors";

const Home = ({setMainStyle, mainStyle, setStyleMain, setId, id}) => {
  const [type, setType] = useState("Tarixiy");
  return (
    <>
      <Hero />
      <Search setMainStyle={setMainStyle} mainStyle={mainStyle}/>
      <Category
        setMainStyle={setMainStyle}
        setType={setType}
      />
      <Authors type={type} setId={setId} mainStyle={mainStyle}/>
    </>
  );
};

export default Home;
