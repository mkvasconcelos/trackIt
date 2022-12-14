import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  return (
    <Container>
      <h1>TrackIt</h1>
      <form>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="senha"></input>
        <input type="button" value="Entrar"></input>
      </form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    margin: 10% 10% 5% 10%;
    width: 80%;
  }
  input {
    margin-bottom: 5px;
    height: 45px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    background: #52b6ff;
    color: #ffffff;
    font-size: 20px;
  }
  input:not(:nth-child(3)) {
    background: #ffffff;
    color: black;
    padding-left: 5px;
  }
  input::placeholder {
    color: #dbdbdb;
  }
  h1 {
    font-size: 70px;
    font-family: "Playball", Arial, Helvetica, sans-serif;
    color: #126ba5;
  }
  p {
    color: #52b6ff;
    text-decoration: underline;
    font-size: 14px;
  }
`;
