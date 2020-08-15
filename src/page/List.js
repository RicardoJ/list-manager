import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import ListItem from "../components/ListItem";

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
  width: 32rem;
  line-height: 37px;
  margin-bottom: 20px;
  width: 32rem;
  display: flex;
  justify-content: space-between;
`;
const List = () => {
  return (
    <Container>
      <Title>
        List <FontAwesomeIcon icon={faTrash} />
      </Title>
      <ListItem />
    </Container>
  );
};

export default List;
