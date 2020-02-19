import React, { useState } from "react";

import api from "../../../../service/api";

import { Button, P, BoxTitle, BookNumber, BoxContainer, Box } from "./Style";

const Books = () => {
  const [book, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/books?pageSize=30");

    setBooks(response.data);
  };

  return (
    <>
      <div>
        <Button onClick={fetchData}>Fetch Data</Button>
      </div>

      <BoxContainer>
        {book.map((book, index) => {
          const dateClear = new Date(book.released).toDateString();

          return (
            <Box key={index}>
              <BookNumber>Book {index + 1}</BookNumber>
              <BoxTitle>{book.name}</BoxTitle>

              <div>
                <P>
                  👨:
                  {book.authors}
                </P>
                <P>
                  📖:
                  {book.numberOfPages} pages
                </P>
                <P>
                  🏘️:
                  {book.country}
                </P>
                <P>⏰:{dateClear}</P>
              </div>
            </Box>
          );
        })}
      </BoxContainer>
    </>
  );
};

export default Books;
