import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import { HabitsConcluded } from "../../contexts/contexts";
import HabitToday from "../HabitToday";

export default function Today() {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Domingo";
      break;
    case 1:
      day = "Segunda";
      break;
    case 2:
      day = "Terça";
      break;
    case 3:
      day = "Quarta";
      break;
    case 4:
      day = "Quinta";
      break;
    case 5:
      day = "Sexta";
      break;
    case 6:
      day = "Sábado";
  }
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const { habits } = useContext(HabitsConcluded);
  return (
    <Container>
      <Header />
      <Main habits={habits}>
        <FirstParagraph>
          <h1>{`${day}, ${date}/${month}`}</h1>
          <h2>
            {habits
              ? `${habits} dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </h2>
        </FirstParagraph>
        <HabitToday title={"Ler 1 capítulo de livro"} sequence={3} record={5} />
        <HabitToday title={"Fazer exercício"} sequence={1} record={3} />
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
  }
  h2 {
    font-size: 18px;
    color: ${(props) => (props.habits ? "#8FC549" : "#BABABA")};
  }
`;
