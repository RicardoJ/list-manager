import React from "react";
import styled from "styled-components";
import List from "./page/List";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e5e8e8;
`;

const AppWrapper = styled.div`
  width: 90%;
  max-width: 150rem;
  height: 70vh;
  margin: 50px auto;
  padding: 30px;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <Container>
      <AppWrapper>
        <List />
      </AppWrapper>
    </Container>
  );
}

export default App;
