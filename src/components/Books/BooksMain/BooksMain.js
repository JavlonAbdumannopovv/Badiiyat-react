import React from "react";
import { badiiyat } from "../../Data/data";
import { Link } from "react-router-dom";
import { Main, SearchMain } from "./BooksMainEl";
import Book from "../../Book/Book";

const BooksMain = ({ setId, type, mainStyle }) => {
  const sendData = (id) => {
    setId(id);
  };

  const authorHandler = () => {
    return badiiyat.data.map((item) => {
      if (item.type === type) {
        return item.books.map((book) => {
          return (
            <Link
              to={`/books/book${book.id}`}
              key={book.id}
              onClick={() => sendData(book.id)}
            >
              <Book
                id={book.id}
                name={book.name}
                url={book.url}
                author={item.author.name}  
                ball={book.ball}
                comment={book.comment}
              />
            </Link>
          );
        });
      } else {
        return null;
      }
    });
  };

  const searchAuthorHandler = () => {
    return badiiyat.data.map((item) => {
      return item.books.map((book) => {
        if (book.name.toLowerCase().includes(mainStyle.data.toLowerCase())) {
          return (
            <Link
              to={`/books/book${book.id}`}
              key={book.id}
              onClick={() => sendData(book.id)}
            >
              <Book
                id={book.id}
                name={book.name}
                url={book.url}
                author={book.author}
                ball={book.ball}
                comment={book.comment}
              />
            </Link>
          );
        } else {
          return null;
        }
      });
    });
  };
  return (
    <div>
      <Main style={mainStyle}>{authorHandler()}</Main>
      {mainStyle.display === "none" ? (
        <SearchMain> {searchAuthorHandler()} </SearchMain>
      ) : null}
    </div>
  );
};

export default BooksMain;
