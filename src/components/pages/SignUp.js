import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ContainerLogSig } from "./StyledComponents";
import LogoHome from "../LogoHome";
import Input from "../Input";
import Submit from "../Submit";
import Loading from "../Loading";
import { dictionary } from "../../constants/constants";
import { Language } from "../../contexts/contexts";
import { useContext } from "react";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const { language } = useContext(Language);
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
          placeholder={dictionary[language].email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={disable}
        />
        <Input
          data-test="password-input"
          type={"password"}
          placeholder={dictionary[language].password}
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          disabled={disable}
        />
        <Input
          data-test="user-name-input"
          type={"text"}
          placeholder={dictionary[language].name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={disable}
        />
        <Input
          data-test="user-image-input"
          type={"text"}
          placeholder={dictionary[language].photo}
          value={image}
          onChange={(e) => setImage(e.target.value)}
          disabled={disable}
        />
        <Submit
          data-test="signup-btn"
          value={dictionary[language].buttonSignUp}
          disabled={disable}
        />
      </form>
      <Link data-test="login-link" to="/">
        <p>{dictionary[language].linkLogin}</p>
      </Link>
    </ContainerLogSig>
  );
}
