import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Image, Token, Language } from "../../contexts/contexts";
import { ContainerLogSig } from "./StyledComponents";
import LogoHome from "../LogoHome";
import Input from "../Input";
import Submit from "../Submit";
import Loading from "../Loading";
import { dictionary } from "../../constants/constants";
// import Switch from "react-switch";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setImage } = useContext(Image);
  const { setToken } = useContext(Token);
  const { language, setLanguage } = useContext(Language);

  function login(email, password) {
    const payload = {
      email,
      password,
    };
    const res = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
      payload
    );
    res.then((res) => {
      navigate("/hoje");
      localStorage.setItem("object", JSON.stringify(res.data));
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
    <ContainerLogSig>
      {/* <Switch checked value={"pt"} /> */}
      <button
        onClick={() =>
          language === "pt-BR" ? setLanguage("en-US") : setLanguage("pt-BR")
        }
      >
        {language.split("-")[0].toUpperCase()}
      </button>
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
        <Submit
          data-test="login-btn"
          value={dictionary[language].buttonLogin}
          disabled={disable}
        />
      </form>
      <Link data-test="signup-link" to="/cadastro">
        <p>{dictionary[language].linkSignUp}</p>
      </Link>
    </ContainerLogSig>
  );
}
