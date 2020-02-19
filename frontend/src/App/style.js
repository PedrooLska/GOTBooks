import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

body { 
  background: #F1F3F5;

  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80vw;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 30px;
`;

export { Container, GlobalStyle, Title };
