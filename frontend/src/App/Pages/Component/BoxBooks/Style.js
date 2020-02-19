import styled from "styled-components";

const Button = styled.button`
  min-width: 150px;
  margin-bottom: 30px;
  padding: 15px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  background-color: rgb(54, 202, 165);
  border: none;
  color: rgb(15, 66, 54);
  transition: all 0.5s;

  &:hover {
    background-color: rgb(40, 209, 209);
  }
`;

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 30px;
  row-gap: 30px;

  margin: 30px;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  color: #333;
  background-color: rgb(165, 230, 230);
`;

const P = styled.p`
  text-align: left;
`;

const BookNumber = styled.h3`
  opacity: 0.8;
`;

const BoxTitle = styled.h3`
  margin: 5px 0 20px;
`;

export { Button, P, BoxTitle, BookNumber, BoxContainer, Box };
