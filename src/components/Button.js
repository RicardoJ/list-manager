import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  cursor: pointer;
`;

const Button = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
Button.propTypes = {
  children: PropTypes.object,
  otherProps: PropTypes.array,
};
export default Button;
