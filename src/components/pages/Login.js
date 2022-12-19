import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Image, Token } from "../../contexts/contexts";
import { Input, LogoHome, Submit, Container, Loading } from "../Components";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setImage } = useContext(Image);
  const { setToken } = useContext(Token);
  function login(email, password) {
    const payload = {
      email: email,
      password: password,
    };
    const res = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
      payload
    );
    res.then((res) => {
      navigate("/hoje");
      setImage(res.data.image);
      setToken(res.data.token);
    });
    res.catch((err) => {
      alert(err.response.data.message);
      setDisable(false);
      setLoading(false);
      setEmail("");
      setPwd("");
    });
  }
  function send(e) {
    setLoading(true);
    setDisable(true);
    e.preventDefault();
    login(email, pwd);
  }

  if (loading) {
    return <Loading />;
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
