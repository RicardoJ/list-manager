import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Item = styled.div`
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  margin-bottom: 1.5rem;
  padding: 0.4rem 0.4rem 0.4rem 0.7rem;
  border-radius: 0.3rem;
  width: 32rem;
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
  const ListFixed = ["Food", "Hobbie", "Sports", "Drinks"];
  return (
    <>
      {ListFixed.map((listItem, index) => (
        <Item key={index}>
          {listItem}
          <Icons>
            <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faTrash} />
          </Icons>
        </Item>
      ))}
    </>
  );
};

export default ListItem;
