import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Item from "../components/Item";
import Button from "../components/Button";

const Container = styled.div`
  width: 40%;
  max-height: 66vh;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title = styled.div`
  font-family: Helvetica, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  width: 25rem;
  line-height: 37px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const ItemList = styled.div`
  overflow-y: auto;
`;
const List = ({
  items,
  onRemoveAll,
  onRemoveItem,
  onEdit,
  onItemClick
}) => {
  return (
    <Container>
      <Title>
        List
        <Button onClick={onRemoveAll}>
          <FontAwesomeIcon icon={faTrash} title="Delete all" />
        </Button>
      </Title>
      <ItemList>
        {items.length ? (
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onRemoveItem={onRemoveItem}
              onEdit={onEdit}
              onItemClick={onItemClick}
            />
          ))
        ) : (
          <h1>No Items</h1>
        )}
      </ItemList>
    </Container>
  );
};

export default List;
