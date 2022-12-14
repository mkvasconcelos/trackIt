import React from "react";
import { BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import { dictionary } from "../constants/constants";
import { Language } from "../contexts/contexts";
import { useContext } from "react";

export default function HabitToday({
  title,
  sequence,
  record,
  habitId,
  doneHabit,
  unDoneHabit,
  check,
}) {
  const { language } = useContext(Language);
  function onClick(habitId, check) {
    !check ? doneHabit(habitId) : unDoneHabit(habitId);
  }
  return (
    <Container check={check} record={sequence === record && check}>
      <div>
        <h1 data-test="today-habit-name">{title}</h1>
        <h2 data-test="today-habit-sequence">
          {`${dictionary[language].currentSequence} `}
          <span>{`${sequence} ${dictionary[language].days}`}</span>
        </h2>
        <h2 data-test="today-habit-record">
          {`${dictionary[language].higherSequence} `}
          <span>{`${record} ${dictionary[language].days}`}</span>
        </h2>
      </div>
      <button
        data-test="today-habit-check-btn"
        onClick={() => onClick(habitId, check)}
      >
        <Check />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 15px;
  margin: 10px 0;
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
