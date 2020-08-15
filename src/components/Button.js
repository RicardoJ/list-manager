import React from "react";
import styled from "styled-components";

const ButtonCustom = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  cursor: pointer;
`;
const Button = ({ children }) => {
  return <ButtonCustom>{children}</ButtonCustom>;
};

export default Button;
