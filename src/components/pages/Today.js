import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../Header";
import { Image } from "../../constants/constants";

export default function Today() {
  console.log(image);
  const [image, setImage] = useContext(Image);
  return (
    <Container>
      <Header image={image} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
