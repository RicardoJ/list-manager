import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Button from "./Button";

const InnerForm = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;
const Add = styled.div`
  width: 3rem;
  height: 2rem;
`;

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(value);
    setValue("");
  };

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(value);
    }
  };

  return (
    <InnerForm onSubmit={handleSubmit}>
      <Input value={value} onChange={updateValue} onKeyDown={keyPress} />
      <Add>
        <Button onClick={handleSubmit}>
          <FontAwesomeIcon icon={faPlus} title="Delete" />
        </Button>
      </Add>
    </InnerForm>
  );
};

export default Form;
