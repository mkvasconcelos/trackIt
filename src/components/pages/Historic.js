import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
export default function Historic() {
  return (
    <Container>
      <Header />
      <Main>
        <FirstParagraph>
          <h1>Histórico</h1>
          <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </FirstParagraph>
      </Main>
      <Footer />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  background: #e5e5e5;
  margin: 70px 0;
  height: 100%;
`;

const FirstParagraph = styled.div`
  margin: 30px 18px;
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
