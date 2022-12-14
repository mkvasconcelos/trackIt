import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { URL } from "../../constants/APImethods";
import { Input, LogoHome, Submit, Container } from "./Input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(false);

  function signUp(email, name, image, password) {
    const payload = {
      email: email,
      name: name,
      image: image,
      password: password,
    };
    const res = axios.post(`${URL}/auth/sign-up`, payload);
    res.then((res) => console.log(res.status, res.data));
    res.catch((res) => console.log(res.status));
  }

  function send(e) {
    e.preventDefault();
    setDisable(true);
    signUp(email, name, image, pwd);
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
        <Input
          type={"text"}
          placeholder={"nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disable}
        />
        <Input
          type={"text"}
          placeholder={"foto"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={disable}
        />
        <Submit value={"Cadastrar"} disabled={disable} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
