import React, { useContext, useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import { HabitsConcluded } from "../contexts/contexts";

export default function HabitToday({
  title,
  sequence,
  record,
  habitId,
  doneHabit,
  unDoneHabit,
}) {
  const [check, setCheck] = useState(false);
  const { habits, setHabits } = useContext(HabitsConcluded);
  function onClick(habitId) {
    check ? setHabits(habits - 1) : setHabits(habits + 1);
    !check ? doneHabit(habitId) : unDoneHabit(habitId);
    setCheck((current) => !current);
  }
  return (
    <Container check={check}>
      <div>
        <h1>{title}</h1>
        <h2>
          Sequência atual: <span>{`${sequence} dias`}</span>
        </h2>
        <h2>
          Seu recorde: <span>{`${record} dias`}</span>
        </h2>
      </div>
      <button onClick={() => onClick(habitId)}>
        <Check />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 15px;
  margin: 10px 18px;
  background: #ffffff;
  border-radius: 5px;
  height: 94px;
  justify-content: space-between;
  h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }
  h2 {
    font-size: 13px;
    color: #666666;
    margin-bottom: 3px;
  }
  span {
    color: ${(props) => (props.check ? "#8FC549" : "#666666")};
  }
  h2:last-child span {
    color: ${(props) => (props.record ? "#8FC549" : "#666666")};
  }
  button {
    width: 69px;
    height: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => (props.check ? "#8FC549" : "#ebebeb")};
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Check = styled(BsCheckLg)`
  font-size: 35px;
  color: #ffffff;
`;
