import React, { useState } from "react";

import api from "../service/api";

function App() {
  const [book, setBooks] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/books?pageSize=30");

    setBooks(response.data);
  };

  return (
    <div>
      <h1>Game of Thrones Books</h1>

      <div>
        <button onClick={fetchData}>Fetch Data</button>
      </div>

      <div>
        {book.map((book, index) => {
          const dateClear = new Date(book.released).toDateString();

          return (
            <div key={index}>
              <h3>Book {index + 1}</h3>
              <h2>{book.name}</h2>

              <div>
                <p>{book.authors}</p>
                <p>{book.numberOfPages} pages</p>
                <p>{book.country}</p>
                <p>{dateClear}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
