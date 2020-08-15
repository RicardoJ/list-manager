import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Item = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  margin-bottom: 1.5rem;
  padding: 0.4rem 0.4rem 0.4rem 0.7rem;
  border-radius: 0.3rem;
  width: 25rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;
const Icons = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
`;

const ListItem = () => {
  const [listFixed, setListFixed] = useState([
    { item: "Food", id: 1 },
    { item: "Hobbie", id: 1 },
    { item: "Sports", id: 1 },
  ]);
  return (
    <>
      {listFixed.map((listItem) => (
        <Item key={listItem.id}>
          {listItem.item}
          <Icons>
            <Button>
              <FontAwesomeIcon icon={faEdit} title="Edit" />
            </Button>
            <Button>
              <FontAwesomeIcon icon={faTrash} title="Delete" />
            </Button>
          </Icons>
        </Item>
      ))}
    </>
  );
};

export default ListItem;
