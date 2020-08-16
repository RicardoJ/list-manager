import React, { useState, useEffect } from "react";
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

const Form = ({ onSubmit, updateItem, editItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      onSubmit(value);
      setValue("");
    } else {
      updateItem(value, editItem.id);
      setValue("");
    }
  };

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  };

  useEffect(() => {
    editItem != null ? setValue(editItem.name) : setValue("");
  }, [editItem]);

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
