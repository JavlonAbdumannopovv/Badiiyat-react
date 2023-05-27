import React from "react";
import Author from "../../Author/Author";
import { badiiyat } from "../../Data/data";
import { Link } from "react-router-dom";
import { Main, SearchMain } from "./AuthorsEl";

const Authors = ({ setId, type, mainStyle }) => {
  const sendData = (id) => {
    setId(id);
  };

  const authorHandler = () => {
    return badiiyat.data.map((item) => {
      if (item.type === type) {
        return (
          <Link
            to={`/author${item.author.id}`}
            key={item.author.id}
            onClick={() => sendData(item.author.id)}
          >
            <Author
              url={item.author.url}
              name={item.author.name}
              born={item.author.born}
              dead={item.author.dead}
              read={item.author.read}
              listen={item.author.listen}
            />
          </Link>
        );
      } else return null;
    });
  };

  const searchAuthorHandler = () => {
    return badiiyat.data.map((item) => {
      if (
        item.author.name.toLowerCase().includes(mainStyle.data.toLowerCase())
      ) {
        return (
          <div key={item.author.id} onClick={() => sendData(item.author.id)}>
            <Author
              url={item.author.url}
              name={item.author.name}
              born={item.author.born}
              dead={item.author.dead}
              read={item.author.read}
              listen={item.author.listen}
            />
          </div>
        );
      } else {
        return null;
      }
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

export default Authors;
