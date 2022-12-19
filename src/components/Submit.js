import styled from "styled-components";

export default function Submit({ value, disabled }) {
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
  cursor: pointer;
`;
