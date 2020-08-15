import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e5e8e8;
`;

const AppWrapper = styled.div`
  width: 90%;
  max-width: 150rem;
  height: 85vh;
  margin: 50px auto;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <Container>
      <AppWrapper>Hi there</AppWrapper>
    </Container>
  );
}

export default App;
