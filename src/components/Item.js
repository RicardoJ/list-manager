import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Container = styled.div`
  margin-bottom: 1.5rem;
  padding: 0.4rem 0.4rem 0.4rem 0.7rem;
  border-radius: 0.3rem;
  width: 25rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;
const NameItem = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;

const Icons = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
`;

const Item = ({ item, onEdit, onRemoveItem, onItemClick }) => {
  return (
    <Container>
      <NameItem>{item.name}</NameItem>
      <Icons>
        <Button onClick={() => onEdit(item)}>
          <FontAwesomeIcon icon={faEdit} title="Edit" />
        </Button>
        <Button onClick={() => onItemClick(item)}>
          <FontAwesomeIcon icon={faShare} title="Share" />
        </Button>
        <Button onClick={() => onRemoveItem(item.id)}>
          <FontAwesomeIcon icon={faTrash} title="Delete" />
        </Button>
      </Icons>
    </Container>
  );
};

export default Item;
