import React from "react";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Category from "../Category/Category";

const Home = ({setMainStyle, mainStyle, setStyleMain, setId}) => {

  return (
    <>
      <Hero />
      <Search setMainStyle={setMainStyle} />
      <Category
        setMainStyle={setMainStyle}
        mainStyle={mainStyle}
        setStyleMain={setStyleMain}
        setId={setId}
      />
    </>
  );
};

export default Home;
