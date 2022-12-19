import axios from "axios";
import React, { useContext, useState } from "react";
import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import { list } from "../constants/constants";
import { Token } from "../contexts/contexts";

export default function Habit({ title, days, habitId, getHabits }) {
  const { token } = useContext(Token);
  const [loading, setLoading] = useState(false);
  function removeHabit(habit) {
    const answer = window.confirm("Tem certeza que quer apagar esse hábito?");
    if (!answer) {
      return;
    }
    setLoading(true);
    const res = axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then((res) => {
      getHabits();
    });
    res.catch((err) => {});
  }
  return (
    <Container>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        {list.map((d) => (
          <InputDay
            key={d.id}
            type="button"
            value={d.weekday}
            check={days.includes(d.id)}
            disabled
          ></InputDay>
        ))}
      </div>
      <Trash onClick={() => removeHabit(habitId)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background: #ffffff;
  border-radius: 5px;
  height: 91px;
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
  width: 30px;
  height: 30px;
  background: ${(props) => (props.check ? "#CFCFCF" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 0 4px 30px 0;
  color: ${(props) => (props.check ? "#ffffff" : "#dbdbdb")};
  font-size: 20px;
`;
