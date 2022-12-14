import styled from "styled-components";

export function LogoHome() {
  return (
    <ContainerLogo>
      <h1>TrackIt</h1>
    </ContainerLogo>
  );
}
const ContainerLogo = styled.div`
  h1 {
    font-size: 70px;
    font-family: "Playball", Arial, Helvetica, sans-serif;
    color: #126ba5;
  }
`;

export function Input({ type, placeholder, value, onChange, disabled }) {
  return (
    <ContainerInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    ></ContainerInput>
  );
}
const ContainerInput = styled.input`
  margin-bottom: 5px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background: #ffffff;
  color: black;
  padding-left: 5px;
  font-size: 20px;
  ::placeholder {
    color: #dbdbdb;
  }
`;

export function Submit({ value, disabled }) {
  return (
    <ContainerSubmit
      type="submit"
      value={value}
      disabled={disabled}
    ></ContainerSubmit>
  );
}
const ContainerSubmit = styled.input`
  margin-bottom: 5px;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background: #52b6ff;
  color: #ffffff;
  font-size: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    margin: 10% 10% 5% 10%;
    width: 80%;
  }
  p {
    color: #52b6ff;
    text-decoration: underline;
    font-size: 14px;
  }
`;
