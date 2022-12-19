import React, { useContext } from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { HabitsConcluded } from "../contexts/contexts";

export default function Footer({ listHabitsToday }) {
  const { habits } = useContext(HabitsConcluded);
  return (
    <Container>
      <ContainerLink to="/habitos">Hábitos</ContainerLink>
      <CircularProgressbarWithChildren
        value={habits}
        maxValue={listHabitsToday}
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(62, 152, 199, ${habits / listHabitsToday})`,
          textColor: "#f88",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      >
        <Link to="/hoje">Hoje</Link>
      </CircularProgressbarWithChildren>
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
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ContainerLink = styled(Link)`
  text-decoration: none;
  color: #52b6ff;
  font-size: 18px;
`;
