import axios from "axios";
import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { list } from "../constants/constants";
import { Token } from "../contexts/contexts";

export default function Habit({ title, days, habitId, getHabits }) {
  const { token } = useContext(Token);
  function removeHabit(habit) {
    const answer = window.confirm("Tem certeza que quer apagar esse hábito?");
    if (!answer) {
      return;
    }
    const res = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then(() => {
      getHabits();
    });
    res.catch();
  }
  return (
    <Container>
      <div>
        <h1 data-test="habit-name">{title}</h1>
      </div>
      <div>
        {list.map((d) => (
          <InputDay
            data-test="habit-day"
            key={d.id}
            type="button"
            value={d.weekday}
            check={days.includes(d.id)}
            disabled
          ></InputDay>
        ))}
      </div>
      <Trash
        data-test="habit-delete-btn"
        onClick={() => removeHabit(habitId)}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #ffffff;
  border-radius: 5px;
  height: fit-content;
  position: relative;
  margin-bottom: 10px;
  h1 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }
`;

const Trash = styled(BsTrash)`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;

const InputDay = styled.input`
  width: 25px;
  height: 25px;
  background: ${(props) => (props.check ? "#CFCFCF" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 0 4px 0px 0;
  color: ${(props) => (props.check ? "#ffffff" : "#dbdbdb")};
  font-size: 15px;
`;
