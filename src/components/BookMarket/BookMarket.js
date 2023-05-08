import { useState } from "react";

import Header from "../Header/Header";
import { Main } from "./BookMarketEL";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";

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
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setStyleMain={setStyleMain}
              setId={setId}
              setMainStyle={setMainStyle}
              mainStyle={mainStyle}
            />
          }
        />
        <Route path="/author" element={<AuthorDetails id={id} />} />
      </Routes>
    </div>
  );
}

export default BookMarket;
