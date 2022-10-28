import React from "react";
import styled from "styled-components";
import Links from "../components/Links";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Profile />
        <Links />
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.main`
  padding: 3.75rem 6.25rem;
`;

const Wrapper = styled.section``;
