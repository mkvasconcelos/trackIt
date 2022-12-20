import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Image, Token } from "../contexts/contexts";
import { Link, useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const { image } = useContext(Image);
  const { token } = useContext(Token);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);
  return (
    <Container data-test="header">
      <ContainerLink to="/">
        <h1>TrackIt</h1>
      </ContainerLink>
      <img
        onClick={() => {
          window.confirm("Quer deslogar?") && localStorage.removeItem("object");
          navigate("/");
        }}
        src={image}
        alt="profile"
      ></img>
    </Container>
  );
}

const Container = styled.div`
  background: #126ba5;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0 10px;
  z-index: 1;
  h1 {
    font-family: "Playball", Arial, Helvetica, sans-serif;
    color: #ffffff;
    font-size: 40px;
    height: 50%;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    cursor: pointer;
  }
`;

const ContainerLink = styled(Link)`
  text-decoration: none;
`;
