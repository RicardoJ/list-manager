import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../components/ItemList";
import Button from "../components/Button";

const Container = styled.div`
  width: 40%;
  height: 66vh;
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

const List = ({ items }) => {
  return (
    <Container>
      <Title>
        List
        <Button>
          <FontAwesomeIcon icon={faTrash} title="Delete all" />
        </Button>
      </Title>
      {items.map((item) => (
      <ListItem items={item} key={item.id} />
      ))}
      
    </Container>
  );
};

export default List;
