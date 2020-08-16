import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ItemList from "../components/ItemList";

const Container = styled.div`
  margin-left: 15px;
  padding: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-radius: 0.3rem;
  width: 30rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
`;

const Area = ({ items, onRemoveItem, onEdit, onItemClick }) => {
  return (
    <Container>
      <ItemList
        items={items}
        onRemoveItem={onRemoveItem}
        onEdit={onEdit}
        onItemClick={onItemClick}
      />
    </Container>
  );
};
Area.propTypes = {
  items: PropTypes.array,
  onRemoveItem: PropTypes.func,
  onEdit: PropTypes.func,
  onItemClick: PropTypes.func,
};
export default Area;
