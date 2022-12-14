import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../constants/APImethods";
import { Input, LogoHome, Submit, Container } from "./Input";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function send(e) {
    e.preventDefault();
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
        />
        <Input
          type={"password"}
          placeholder={"senha"}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder={"nome"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder={"foto"}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Submit value={"Cadastrar"} />
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}
