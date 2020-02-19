import React from "react";

import Books from "./Pages/Component/BoxBooks/Box";

import { Container, GlobalStyle, Title } from "./style";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Title>Game of Thrones Book</Title>
      <Books />
    </Container>
  );
}

export default App;
