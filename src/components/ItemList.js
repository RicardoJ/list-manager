import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Item from "../components/Item";

const Container = styled.div`
  overflow-y: auto;
`;

const ItemList = ({ items, onRemoveItem, onEdit, onItemClick }) => {
  return (
    <Container>
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
    </Container>
  );
};
ItemList.propTypes = {
  items: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onEdit: PropTypes.func,
  onItemClick: PropTypes.func,
};
export default ItemList;
