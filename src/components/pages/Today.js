import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import { HabitsConcluded, Token } from "../../contexts/contexts";
import HabitToday from "../HabitToday";
import { day } from "../../constants/constants";
import axios from "axios";
import { Loading } from "../Components";

export default function Today() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const { token } = useContext(Token);
  const { habits } = useContext(HabitsConcluded);
  const [loading, setLoading] = useState(true);
  const [listHabitsToday, setListHabitsToday] = useState([]);
  useEffect(() => {
    getHabitsToday();
  }, []);
  function getHabitsToday() {
    const res = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then((res) => {
      setLoading(false);
      setListHabitsToday(res.data);
    });
    res.catch((err) => {
      setLoading(false);
    });
  }
  function doneHabit(habit) {
    const res = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}/check`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then((res) => {
      console.log(res);
      getHabitsToday();
    });
    res.catch((err) => {
      console.log(err.res);
    });
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />
      <Main habits={habits}>
        <FirstParagraph>
          <h1>{`${day}, ${date}/${month + 1}`}</h1>
          <h2>
            {habits
              ? `${habits} dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </h2>
        </FirstParagraph>
        {listHabitsToday.map((h) => (
          <HabitToday
            key={h.id}
            title={h.name}
            sequence={h.currentSequence}
            record={h.highestSequence}
            habitId={h.id}
            doneHabit={doneHabit}
          />
        ))}
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
    margin-bottom: 5px;
  }
  h2 {
    font-size: 18px;
    color: ${(props) => (props.habits ? "#8FC549" : "#BABABA")};
  }
`;
