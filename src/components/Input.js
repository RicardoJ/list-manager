import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Wrapper = styled.div`
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
const Add = styled.div`
  width: 3rem;
  height: 2rem;
`;

const Input = () => {
  return (
    <Wrapper>
      <InputAdd type="text" placeholder="Add" />
      <Add>
        <Button>
          <FontAwesomeIcon icon={faPlus} title="Delete" />
        </Button>
      </Add>
    </Wrapper>
  );
};

export default Input;
