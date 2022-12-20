import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import { Container, Main, CalendarContainer } from "./StyledComponents";
import Calendar from "react-calendar";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { Token } from "../../contexts/contexts";

export default function Historic() {
  const { token } = useContext(Token);
  const [historyHabits, setHistoryHabits] = useState([]);
  const [habitDay, setHabitDay] = useState([]);
  useEffect(() => {
    const res = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then((res) => {
      console.log(res);
      setHistoryHabits(res.data);
    });
    res.catch((err) => {
      console.log(err.res);
    });
  }, [token]);
  function getHabitsHistory(day) {
    const habitDay = historyHabits.filter((d) => d.day === day);
    setHabitDay(habitDay);
    console.log(habitDay);
  }
  return (
    <Container>
      <Header />
      <Main>
        <FirstParagraph>
          <h1>Histórico</h1>
        </FirstParagraph>
        <CalendarContainer>
          <Calendar
            data-teste="calendar"
            defaultValue={new Date()}
            onClickDay={(d) => getHabitsHistory(d.toLocaleDateString("pt-BR"))}
          />
        </CalendarContainer>
        {habitDay.length !== 0 && (
          <Habits>
            <h1>{habitDay[0].day}</h1>
            {habitDay[0].habits.map((h) => (
              <div key={h.id}>
                <h1>{h.name}</h1>
                {h.done ? <Check /> : <Wrong />}
              </div>
            ))}
          </Habits>
        )}
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

const Habits = styled.div`
  div {
    height: fit-content;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  div h1 {
    color: #666666;
    font-size: 15px;
  }
  h1 {
    color: #126ba5;
    font-size: 18px;
    margin: 15px 0;
  }
`;

const Check = styled(BsCheckLg)`
  font-size: 35px;
  color: #8fc549;
`;

const Wrong = styled(GiCancel)`
  font-size: 35px;
  color: red;
`;
