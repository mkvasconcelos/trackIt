import React, { useContext } from "react";
import styled from "styled-components";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { HabitsConcluded } from "../contexts/contexts";

export default function Footer() {
  const { habits } = useContext(HabitsConcluded);
  return (
    <Container>
      <ContainerLink to="/habitos">Hábitos</ContainerLink>
      <Link to="/hoje">
        <CircularProgressbarWithChildren
          value={habits}
          maxValue={3}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "round",
            textSize: "18px",
            // How long animation takes to go from one percentage to another, in seconds

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(200, 152, 199, ${60 / 100})`,
            textColor: "#ffffff",
            trailColor: "#d6d6d6",
            background: "blue",
          })}
        >
          <div>Hoje</div>
        </CircularProgressbarWithChildren>
      </Link>
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
