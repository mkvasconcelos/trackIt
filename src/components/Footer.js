import React, { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link, useNavigate } from "react-router-dom";
import {
  HabitsConcluded,
  HabitsTodayList,
  Language,
} from "../contexts/contexts";
import { dictionary } from "../constants/constants";

export default function Footer() {
  const { habits } = useContext(HabitsConcluded);
  const { listHabitsToday } = useContext(HabitsTodayList);
  const { language } = useContext(Language);
  const navigate = useNavigate();
  return (
    <Container data-test="menu">
      <ContainerLink data-test="habit-link" to="/habitos">
        {dictionary[language].habits}
      </ContainerLink>
      <ContainerProgressBar
        data-test="today-link"
        onClick={() => navigate("/hoje")}
      >
        <CircularProgressbar
          value={habits}
          maxValue={listHabitsToday.length}
          text={
            language === "pt-BR" ? (
              <tspan dy={5} dx={-20}>
                {dictionary[language].today}
              </tspan>
            ) : (
              <tspan dy={7} dx={-25}>
                {dictionary[language].today}
              </tspan>
            )
          }
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
      </ContainerProgressBar>
      <ContainerLink data-test="history-link" to="/historico">
        {dictionary[language].historic}
      </ContainerLink>
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

const ContainerProgressBar = styled.div`
  display: flex;
  width: 91px;
  height: 91px;
  bottom: 0;
  left: calc(50% - (91px / 2));
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  cursor: pointer;
`;
