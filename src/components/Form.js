import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
`;

const Form = ({ onSubmit, editItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  const keyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {
    editItem != null ? setValue(editItem.name) : setValue("");
  }, [editItem]);

  return (
    <Container>
      <Input value={value} onChange={updateValue} onKeyDown={keyPress} />
      <Button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faPlus} title="Delete" />
      </Button>
    </Container>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func,
  editItem: PropTypes.object,
};
export default Form;
