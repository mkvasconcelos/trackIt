import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ContainerLogSig } from "./StyledComponents";
import LogoHome from "../LogoHome";
import Input from "../Input";
import Submit from "../Submit";
import Loading from "../Loading";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  function signUp(email, name, image, password) {
    const payload = {
      email,
      name,
      image,
      password,
    };
    const res = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,
      payload
    );
    res.then(() => navigate("/"));
    res.catch((err) => {
      alert(err.response.data.message);
      setDisable(false);
      setLoading(false);
      setEmail("");
      setPwd("");
      setName("");
      setImage("");
    });
  }
  function send(e) {
    setLoading(true);
    setDisable(true);
    e.preventDefault();
    signUp(email, name, image, pwd);
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <ContainerLogSig>
      <LogoHome />
      <form onSubmit={send}>
        <Input
          data-test="email-input"
          type={"email"}
          placeholder={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable}
        />
        <Input
          data-test="password-input"
          type={"password"}
          placeholder={"senha"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          disabled={disable}
        />
        <Input
          data-test="user-name-input"
          type={"text"}
          placeholder={"nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disable}
        />
        <Input
          data-test="user-image-input"
          type={"text"}
          placeholder={"foto"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={disable}
        />
        <Submit data-test="signup-btn" value={"Cadastrar"} disabled={disable} />
      </form>
      <Link data-test="login-link" to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </ContainerLogSig>
  );
}
