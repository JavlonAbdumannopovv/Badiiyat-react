import { useState } from "react";
import Header from "../Header/Header";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Books from "../Books/Books";
import BookDetails from "../BookDetails/BookDetails";

function BookMarket() {
  const [styleMain, setStyleMain] = useState({ display: "block" });
  const [id, setId] = useState(1);
  const [mainStyle, setMainStyle] = useState({
    display: "flex",
    data: "",
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* NOTE - Author */}
        <Route
          path="/"
          element={
            <Home
              id={id}
              setStyleMain={setStyleMain}
              setId={setId}
              setMainStyle={setMainStyle}
              mainStyle={mainStyle}
            />
          }
        />
        <Route
          path={`/:author${id}`}
          element={<AuthorDetails id={id} setId={setId} />}
        />

        {/* NOTE - Books */}
        <Route
          path={`/books`}
          element={<Books setMainStyle={setMainStyle} mainStyle={mainStyle} id={id} setId={setId} />}
        />
        <Route
          path={`/books/:book${id}`}
          element={<BookDetails id={id} setId={setId} />}
        />
      </Routes>
    </div>
  );
}

export default BookMarket;
