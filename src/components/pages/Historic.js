import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styled from "styled-components";
import { Container, Main, CalendarContainer } from "./StyledComponents";
import Calendar from "react-calendar";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { Token, Language } from "../../contexts/contexts";

export default function Historic() {
  const { token } = useContext(Token);
  const [historyHabits, setHistoryHabits] = useState([]);
  const [habitDay, setHabitDay] = useState([]);
  const [successList, setSuccessList] = useState([]);
  const [failList, setFailList] = useState([]);
  const { language } = useContext(Language);
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
      const newSuccessList = [...successList];
      const newFailList = [...failList];
      for (let i = 0; i < res.data.length; i++) {
        if (
          res.data[i].habits.length ===
          res.data[i].habits.filter((h) => h.done === true).length
        ) {
          newSuccessList.push(res.data[i].day);
        } else {
          newFailList.push(res.data[i].day);
        }
      }
      setSuccessList(newSuccessList);
      setFailList(newFailList);
    });
    res.catch((err) => {
      console.log(err.res);
    });
  }, [token, setFailList, setSuccessList, failList, successList]);
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
        <CalendarContainer check={false}>
          <Calendar
            data-teste="calendar"
            locale={language}
            defaultValue={new Date()}
            onClickDay={(d) => getHabitsHistory(d.toLocaleDateString("pt-BR"))}
            tileClassName={({ date }) => {
              if (
                successList.find((x) => x === date.toLocaleDateString("pt-BR"))
              ) {
                return "right";
              }
              if (
                failList.find((x) => x === date.toLocaleDateString("pt-BR"))
              ) {
                return "wrong";
              }
            }}
          />
        </CalendarContainer>
        {habitDay.length !== 0 && (
          <Habits>
            {language === "pt-BR" && <h1>{habitDay[0].day}</h1>}
            {language === "en-US" && (
              <h1>{`${habitDay[0].day.split("/")[1]}/${
                habitDay[0].day.split("/")[0]
              }/${habitDay[0].day.split("/")[2]}`}</h1>
            )}
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
  height: fit-content;
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
