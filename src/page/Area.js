import React from "react";
import styled from "styled-components";
import Item from "../components/Item";

const Wrapper = styled.div`
  margin-left: 15px;
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-radius: 0.3rem;
  width: 30rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const ItemList = styled.div`
  overflow-y: auto;
`;

const Area = ({ removeItem }) => {
  return (
    <Wrapper>
      <ItemList>
        {removeItem.length ? (
          removeItem.map((item) => <Item item={item} key={item.id} />)
        ) : (
          <h1>No Items</h1>
        )}
      </ItemList>
    </Wrapper>
  );
};

export default Area;
