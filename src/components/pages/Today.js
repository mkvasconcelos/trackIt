import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import {
  HabitsConcluded,
  HabitsTodayList,
  Token,
} from "../../contexts/contexts";
import HabitToday from "../HabitToday";
import { day } from "../../constants/constants";
import axios from "axios";
import Loading from "../Loading";
import { Container, Main } from "./StyledComponents";

export default function Today() {
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const { token } = useContext(Token);
  const { habits, setHabits } = useContext(HabitsConcluded);
  const [loading, setLoading] = useState(true);
  const { listHabitsToday, setListHabitsToday } = useContext(HabitsTodayList);
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
      setHabits(res.data.filter((h) => h.done === true).length);
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
      getHabitsToday();
    });
    res.catch((err) => {});
  }
  function unDoneHabit(habit) {
    const res = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}/uncheck`,
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
              ? `${parseInt(
                  (habits / listHabitsToday.length) * 100
                )}% dos hábitos concluídos`
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
            check={h.done}
            doneHabit={doneHabit}
            unDoneHabit={unDoneHabit}
          />
        ))}
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
    margin-bottom: 5px;
  }
  h2 {
    font-size: 18px;
    color: ${(props) => (props.habits ? "#8FC549" : "#BABABA")};
  }
`;
