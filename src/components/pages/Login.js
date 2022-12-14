import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../constants/APImethods";
import { Input, LogoHome, Submit, Container } from "./Input";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [disable, setDisable] = useState(false);
  function login(email, password) {
    const payload = {
      email: email,
      password: password,
    };
    const res = axios.post(`${URL}/auth/login`, payload);
    res.then(() => navigate("/hoje"));
    res.catch((err) => {
      alert(err.response.data.message);
      setDisable(false);
      setEmail("");
      setPwd("");
    });
  }
  function send(e) {
    setDisable(true);
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
          disabled={disable}
        />
        <Input
          type={"password"}
          placeholder={"senha"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          disabled={disable}
        />
        <Submit value={"Entrar"} disabled={disable} />
      </form>
      <Link to="/cadastro">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
