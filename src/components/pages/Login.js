import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../constants/APImethods";
import { Input, LogoHome, Submit, Container } from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  function send(e) {
    e.preventDefault();
    login(email, pwd);
  }
  return (
    <Container>
      <LogoHome />
      <form onSubmit={send}>
        <Input
          type={"email"}
          placeholder={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"senha"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Submit value={"Entrar"} />
      </form>
      <Link to="/cadastro">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
