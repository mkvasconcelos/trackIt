import styled from "styled-components";
export default function LogoHome() {
  return (
    <ContainerLogo>
      <img src="logo.png" alt={"logo-trackIt"}></img>
      <h1>TrackIt</h1>
    </ContainerLogo>
  );
}
const ContainerLogo = styled.div`
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  position: relative;
  img {
    width: 155px;
    height: 100px;
  }
  h1 {
    font-size: 70px;
    font-family: "Playball", Arial, Helvetica, sans-serif;
    color: #126ba5;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
