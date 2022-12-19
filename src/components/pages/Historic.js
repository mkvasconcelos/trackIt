import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import { Container, Main } from "./StyledComponents";

export default function Historic() {
  return (
    <Container>
      <Header />
      <Main>
        <FirstParagraph>
          <h1>Histórico</h1>
        </FirstParagraph>
        <section>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </section>
      </Main>
      <Footer />
    </Container>
  );
}
const FirstParagraph = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  height: fit-content;
  h1 {
    color: #126ba5;
    font-size: 23px;
    margin-bottom: 15px;
  }
  h2 {
    font-size: 18px;
    color: #666666;
  }
`;
