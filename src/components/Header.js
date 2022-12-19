import React, { useContext } from "react";
import styled from "styled-components";
import { Image } from "../contexts/contexts";

export default function Header() {
  const { image } = useContext(Image);
  return (
    <Container>
      <h1>TrackIt</h1>
      <img src={image} alt="profile"></img>
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
  }
`;
