import styled from "styled-components";

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  disabled,
}) {
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
