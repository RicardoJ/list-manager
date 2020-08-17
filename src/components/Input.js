import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;
const InputAdd = styled.input`
  display: flex;
  width: 14rem;
  height: 1rem;
  padding: 0.7rem;
  border: none;
  outline: none;
  border-radius: 0.7rem;
  letter-spacing: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Input = ({ ...otherProps }) => {
  return (
    <Container>
      <InputAdd type="text" placeholder="Add" {...otherProps} />
    </Container>
  );
};
Input.propTypes = {
  otherProps: PropTypes.array,
};
export default Input;
