import React, { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { HabitsConcluded, HabitsTodayList } from "../contexts/contexts";

export default function Footer() {
  const { habits } = useContext(HabitsConcluded);
  const { listHabitsToday } = useContext(HabitsTodayList);
  return (
    <Container>
      <ContainerLink to="/habitos">Hábitos</ContainerLink>
      <ContainerHabits>
        <CircularProgressbar
          value={habits}
          maxValue={listHabitsToday.length}
          text={"Hoje"}
          background
          backgroundPadding={6}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            backgroundColor: "#52B6FF",
            textSize: "18px",
            strokeLinecap: "round",
            textColor: "#FFFFFF",
            pathColor: "#FFFFFF",
            trailColor: "transparent",
          })}
        />
      </ContainerHabits>
      <ContainerLink to="/historico">Histórico</ContainerLink>
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0 36px;
  align-items: center;
  position: relative;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ContainerLink = styled(Link)`
  text-decoration: none;
  color: #52b6ff;
  font-size: 18px;
`;

const ContainerHabits = styled.div`
  display: flex;
  width: 91px;
  height: 91px;
  bottom: 0;
  left: calc(50% - (91px / 2));
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
