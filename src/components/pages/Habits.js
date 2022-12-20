import React, { useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";
import { Token } from "../../contexts/contexts";
import Loading from "../Loading";
import Habit from "../Habit";
import { list } from "../../constants/constants";
import { Container, Main } from "./StyledComponents";

export default function Habits() {
  const { token } = useContext(Token);
  const [daysSelected, setDaysSelected] = useState([]);
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [habits, setHabits] = useState([]);

  const getHabits = useCallback(() => {
    const res = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then((res) => {
      setHabits(res.data);
      setLoading(false);
    });
    res.catch(() => {
      setLoading(false);
    });
  }, [token]);
  useEffect(() => {
    getHabits();
  }, [getHabits]);

  function createHabit(title, daysSelected) {
    const payload = {
      name: title,
      days: daysSelected,
    };
    const res = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`,
      payload,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    res.then(() => {
      setLoading(false);
      setDisable(false);
      setShow(false);
      setTitle("");
      setDaysSelected([]);
      getHabits();
    });
    res.catch(() => {
      setLoading(false);
      setDisable(false);
    });
  }

  function getDays(day) {
    const newDaysSelected = [...daysSelected];
    daysSelected.includes(day)
      ? newDaysSelected.splice(newDaysSelected.indexOf(day), 1)
      : newDaysSelected.push(day);
    setDaysSelected(newDaysSelected);
  }
  function send(e) {
    setLoading(true);
    setDisable(true);
    e.preventDefault();
    createHabit(title, daysSelected);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <Container>
      <Header />
      <Main>
        <FirstParagraph>
          <h1>Meus hábitos</h1>
          <button
            data-test="habit-create-btn"
            onClick={() => setShow(true)}
            disabled={disable}
          >
            +
          </button>
        </FirstParagraph>
        <CreateHabit data-test="habit-create-container" show={show}>
          <form onSubmit={send}>
            <div>
              <input
                data-test="habit-name-input"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="nome do hábito"
                required
              ></input>
            </div>
            <div>
              {list.map((d) => (
                <InputDay
                  data-test="habit-day"
                  key={d.id}
                  type="button"
                  value={d.weekday}
                  onClick={() => getDays(d.id)}
                  check={daysSelected.includes(d.id)}
                  disabled={disable}
                ></InputDay>
              ))}
            </div>
            <div>
              <input
                data-test="habit-create-cancel-btn"
                text="button"
                disabled={disable}
                onClick={() => setShow(false)}
                value="Cancelar"
              ></input>
              <input
                data-test="habit-create-save-btn"
                type="submit"
                value="Salvar"
                disabled={disable}
              ></input>
            </div>
          </form>
        </CreateHabit>
        <section>
          {habits.length === 0
            ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"
            : habits.map((h) => (
                <Habit
                  data-test="habit-container"
                  key={h.id}
                  title={h.name}
                  days={h.days}
                  habitId={h.id}
                  getHabits={getHabits}
                />
              ))}
        </section>
      </Main>
      <Footer />
    </Container>
  );
}

const FirstParagraph = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  h1 {
    color: #126ba5;
    font-size: 23px;
  }
  button {
    width: 40px;
    height: 35px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #52b6ff;
    color: #ffffff;
    font-size: 25px;
    cursor: pointer;
  }
`;

const CreateHabit = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin-bottom: 20px;
  form {
    display: flex;
    flex-direction: column;
    div {
      width: 100%;
    }
    div:nth-child(1) input {
      width: 100%;
      height: 45px;
      background: #ffffff;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
      font-size: 20px;
      margin-bottom: 8px;
      padding-left: 10px;
      color: #666666;
    }
    div:nth-child(1) input::placeholder {
      color: #dbdbdb;
    }
    div:nth-child(3) {
      display: flex;
      justify-content: end;
    }
    div:nth-child(3) input:last-child {
      width: 84px;
      height: 35px;
      background: #52b6ff;
      border-radius: 5px;
      border: none;
      margin-left: 25px;
      color: #ffffff;
      font-size: 16px;
      cursor: pointer;
    }
    div:nth-child(3) input:first-child {
      background: none;
      width: 75px;
      border: none;
      color: #52b6ff;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;

const InputDay = styled.input`
  width: 30px;
  height: 30px;
  background: ${(props) => (props.check ? "#CFCFCF" : "#ffffff")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin: 0 4px 30px 0;
  cursor: pointer;
  color: ${(props) => (props.check ? "#ffffff" : "#dbdbdb")};
  font-size: 20px;
`;
